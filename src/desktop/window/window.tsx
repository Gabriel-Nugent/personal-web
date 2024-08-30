import * as React from 'react';
import styles from './window.module.css';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import WindowHeader from './window_header';
import { useRecoilValue } from 'recoil';
import { isMobileAtom } from '../../atoms';

export interface IWindowProps {
  content: JSX.Element;
  title: string;
  state: boolean;
  onClose: () => void;
  icon: any;
}

export default function Window (props: IWindowProps) {
  const isMobile = useRecoilValue(isMobileAtom)
  const [maximized, setMaximized] = React.useState<boolean>(isMobile);

  return (
    <>
      { props.state === true ?
        <>
          { maximized ?
            <div
              className={`${styles.windowContainer} ${styles.maximized}`}
              tabIndex={-1}
              style={{
                left: 0,
                top: 0,
                height: '100%',
                width: '100%',
                overflow: 'auto',
              }}
            >
              <WindowHeader icon={props.icon} title={props.title} onClose={props.onClose} windowState={maximized} changeSize={() => setMaximized(false)}/>
                <div style={isMobile ? {height: '100%', width: '100%'} : {height: '100%', width: '100%', minWidth: '500px'}} tabIndex={-1}>
                  <div className={`${styles.windowBody} notDraggable`}>
                    {props.content}
                  </div>
                </div>
            </div>
            :
            <Draggable
              cancel='.notDraggable'
              defaultPosition={{x: 0, y: 0}}
            >
              <div className={`${styles.windowContainer}`} tabIndex={-1}>
                <WindowHeader icon={props.icon} title={props.title} onClose={props.onClose} windowState={maximized} changeSize={() => setMaximized(true)}/>
                <Resizable
                  defaultSize={{
                    width: 500,
                    height: 400
                  }}
                  className='notDraggable'
                >
                  <div style={isMobile ? {height: '100%', width: '100%'} : {height: '100%', width: '100%', minWidth: '500px'}} tabIndex={-1}>
                    <div className={`${styles.windowBody} notDraggable`}>
                      {props.content}
                    </div>
                  </div>
                </Resizable>
              </div>
            </Draggable>
          }
        </>
        :
        <></>
      }
    </>
  );
}
