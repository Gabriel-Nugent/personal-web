import styles from './desktop.module.css'
import Clock from './clock/clock';
import logo from './goldfish.png';
import github from './transparentGit.png';
import linkedin from './linkedin.png';
import downloadIcon from './downloadIcon.png'
import resume from './ResumeNugent.pdf'
import { isMobileAtom } from '../atoms';
import { useRecoilValue } from 'recoil';

export default function Toolbar () {
  const isMobile = useRecoilValue(isMobileAtom)

  return (
    <header className={styles.toolbar}>
       <div id={styles.leftTools}>
          <img src={logo} className={styles.logo}/>
          <a className={styles.iconLink} target="_blank" href='https://github.com/Gabriel-Nugent'>
            <div className={styles.linkContent}>
              <img src={github} className={`${styles.toolbar} ${styles.small}`}/>
              <p className={styles.toolbar}>
                Github
              </p>
            </div>
          </a>
          <a className={styles.iconLink} target="_blank" href='https://www.linkedin.com/in/gabriel-nugent/'>
            <div className={styles.linkContent}>
              <img src={linkedin} className={`${styles.toolbar} ${styles.small}`}/>
              <p className={styles.toolbar}>
                Linkedin
              </p>
            </div>
          </a>
          <a className={styles.iconLink} href={resume} download>
            <div className={styles.linkContent}>
              <img src={downloadIcon} className={`${styles.toolbar} ${styles.small}`}/>
              <p className={styles.toolbar}>
                My Resume
              </p>
            </div>
          </a>
       </div>
       { !isMobile &&
          <div id={styles.rightTools}>
            <Clock/>
          </div>
       }
    </header>
  );
}
