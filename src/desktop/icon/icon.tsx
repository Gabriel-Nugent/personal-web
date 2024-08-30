import * as React from 'react';
import styles from './icon.module.css'
import { useRecoilValue } from 'recoil';
import { isMobileAtom } from '../../atoms';

export interface IIconProps {
  name: string;
  imageSrc: any;
  window: JSX.Element;
  onDoubleClick: () => void;
}

export default function Icon (props: IIconProps) {
  const isMobile = useRecoilValue(isMobileAtom)

  return (
    <>
      <div className={styles.icon}>
        <img src={props.imageSrc} className={styles.icon}/>
        <p className={styles.icon}>
          {props.name}
        </p>
        <button id={styles.iconOverlay} onClick={isMobile ? props.onDoubleClick : () => null} onDoubleClick={props.onDoubleClick}/>
      </div>
      {props.window}
    </>
  );
}
