import * as React from 'react';
import styles from './loadingScreen.module.css'
import loading from './loading.gif'

export interface ILoadingScreenProps {
}

export default function LoadingScreen (props: ILoadingScreenProps) {
  
  return (
    <div id={styles.overlay}>
      <main className={styles.loadingBox}>
        <div className={styles.loadingImageContainer}>
          <img src={loading}/>
        </div>
        <section className={styles.loadingProgress}>
          <h1 className={styles.loadingBox}>
            <span>l</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </h1>
          <div className={styles.loadingBar}>
            <div className={styles.loadingBarValue} />
          </div>
        </section>
      </main>
    </div>
  );
}
