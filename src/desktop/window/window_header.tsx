import styles from './window.module.css'
import closeIcon from './x.png'
import restoreDownIcon from './restoreDown.png'
import maximizeIcon from './maximize.svg'
import { useRecoilValue } from 'recoil';
import { isMobileAtom } from '../../atoms';

export interface IWindowHeaderProps {
  title: string;
  onClose: () => void;
  changeSize: () => void;
  windowState: boolean;
  icon: any;
}

export default function WindowHeader (props: IWindowHeaderProps) {
  const isMobile = useRecoilValue(isMobileAtom)

  return (
    <div className={styles.windowHeader} style={props.windowState ? {cursor: 'default'} : {}} tabIndex={-1}>
      <div className={styles.windowHeaderDescription}>
        <img src={props.icon}/>
        {props.title}
      </div>
      <div className={styles.windowActions}>
        { !isMobile &&
          <div className={`${styles.windowButton} pushButtonContainer`}>
            <button id={styles.restoreDownButton} className={`pushButton`} onClick={props.changeSize}>
              <img src={props.windowState? restoreDownIcon : maximizeIcon}/>
            </button>
          </div>
        }
        <div className={`${styles.windowButton} pushButtonContainer`}>
          <button id={styles.closeButton} className={`pushButton`} onClick={props.onClose}>
            <img src={closeIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
