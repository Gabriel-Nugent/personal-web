import { useState } from 'react'
import styles from './App.module.css'
import LoadingScreen from './loading_screen/loadingScreen'
import Desktop from './desktop/desktop'
import { useSetRecoilState } from 'recoil'
import { isMobileAtom } from './atoms'

function App() {
  const [OSLoading, setOSLoading] = useState<Boolean>(true)
  const setIsMobile = useSetRecoilState(isMobileAtom)

  if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
    setIsMobile(true);
  }

  setTimeout(() => {
    setOSLoading(false);
  }, 3000)

  return (
    <div id={styles.background}>
        { OSLoading ?
          <LoadingScreen />
          :
          <></>
        }
        <Desktop opacity={ OSLoading ? '0%' : '100%' }/>
    </div>
  )
}

export default App
