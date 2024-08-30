import * as React from 'react';
import styles from './clock.module.css'

export interface IClockProps {
}

export default function Clock (props: IClockProps) {
  const [date, setDate] = React.useState<string>("")

  React.useEffect(() => {
    setInterval(() => {
      const d = new Date();
      setDate(d.toLocaleString().replaceAll('/','-'))
    }, 1000)
  }, [])

  return (
    <section className={styles.clock}>
      <p>1{date}</p>
    </section>
  );
}
