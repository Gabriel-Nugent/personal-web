import * as React from 'react';
import styles from './desktop.module.css'
import Toolbar from './toolbar';
import Icon from './icon/icon';
import Window from './window/window';
import About from './about/about';
import me from './about/me.jpg'
import jumbo from './jumbo.png'
import Projects from './projects/projects';
import builderFish from './projects.png'
import { useRecoilValue } from 'recoil';
import { isMobileAtom } from '../atoms';

export interface IDesktopProps {
  opacity: string;
}

export default function Desktop (props: IDesktopProps) {
  const [aboutState, setAboutState] = React.useState<boolean>(false);
  const [projectsState, setProjectsState] = React.useState<boolean>(false);
  const isMobile = useRecoilValue(isMobileAtom);

  return (
    <div id={styles.overlay} style={{opacity: props.opacity}}>
      <Toolbar/>
      <main id='desktop' className={styles.desktop}>
        <Icon 
          name='About Me' 
          imageSrc={me}
          onDoubleClick={() => setAboutState(true)}
          window={<Window
            icon={me}
            content={<About />} 
            title='About Me (Gabriel Nugent)' 
            state={aboutState} 
            onClose={() => setAboutState(false)}
          />}
        />
        <Icon 
          name='My Projects' 
          imageSrc={builderFish} 
          onDoubleClick={() => setProjectsState(true)}
          window={<Window
            icon={builderFish}
            content={<Projects />} 
            title='My Projects' 
            state={projectsState} 
            onClose={() => setProjectsState(false)}
          />} 
        />
        {/* <Icon name='Snake (Coming Soon)' imageSrc={null} window={<></>} /> */}
        <img id={styles.jumboImage} src={jumbo}/>
        <div className={styles.speechBubble}>{isMobile ? "Tap" : "Double click"} <br/> on an icon <br /> to open a <br/> new window /ᐠ｡ꞈ｡ᐟ\</div>
      </main>
    </div>
  );
}
