import styles from './projects.module.css'

export interface IProjectCardProps {
  title: string;
  date: string;
  tools: string;
  description: string;
  image: any;
  link: string | undefined;
}

export default function ProjectCard (props: IProjectCardProps) {
  return (
    <div className={styles.cardContainer}>
      {props.image !== null &&
        <a className={styles.cardImage} target='_blank' href={props.link}>
          <img src={props.image}/>
        </a>
      }
      <div className={styles.cardInformation}>
        <h2 className={styles.cardTitle}><em>{props.title}</em> {props.date}</h2>
        <h3 className={styles.cardTools}>{props.tools}</h3>
        <p className={styles.cardDescription}>{props.description}</p>
      </div>
    </div>
  );
}
