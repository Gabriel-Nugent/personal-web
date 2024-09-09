import styles from './about.module.css'
import me from './me.jpg'

export default function About () {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div id={styles.aboutImageContainer}>
          <img src={me}></img>
          <h1>Hi! Welcome to my Website</h1>
        </div>
        <div className={styles.aboutText}>
          <p className={styles.about}>
            &emsp; I'm Gabe, a Software Engineer living in San Marcos, Texas. I graduated from Texas State University with a B.S. in Computer Science in 2024.
            I focus primarily in Computer Graphics, but I also have experience in web development. I am skilled with languages such as C++, Go, Typescript, 
            and many more.
          </p>
          <p className={styles.about}>
            &emsp; Outside of work I am an artist, musician, and chef. If you ever want to talk about artists like Joanna Newsom and Phil Elvirum, I'm your guy (You'll have trouble getting me to stop though).
            I also have a cat named Jumbo.
          </p>
          <p className={styles.about}>
            &emsp; I've previously interned at Everbridge as a Technical Support Agent and Staples as a Software Engineer.
            Currently, I'm looking for a full-time position to put my skills and expertise to use. 
          </p>
          <div id={styles.quickFacts}>
            <h3 className={styles.about}>Quick Facts</h3>
            <table className={styles.about}>
              <tr className={styles.about}><td>Favorite Food</td> <td>-</td> <td>Pho ap chao</td></tr>
              <tr className={styles.about}><td>Favorite Musician</td> <td>-</td> <td>Joanna Newsom</td></tr>
              <tr className={styles.about}><td>Favorite Color</td> <td>-</td> <td>Sea Blue</td></tr>
              <tr className={styles.about}><td>Favorite Fish</td> <td>-</td> <td>Goldfish</td></tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
