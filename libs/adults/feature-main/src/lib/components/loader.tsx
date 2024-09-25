import styles from './loader.module.css';
import LogoSvg from './svg/LogoSvg';
import TitleSvg from './svg/TitleSvg';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <LogoSvg
        className={styles.logo}
        topPartClassName={styles.logoTopPart}
        midPartClassName={styles.logoMidPart}
        botPartClassName={styles.logoBotPart}
      />
      <TitleSvg
        className={styles.title}
        kClassName={styles.titleK}
        eClassName={styles.titleE}
        dClassName={styles.titleD}
        o1ClassName={styles.titleO1}
        o2ClassName={styles.titleO2}
      />
    </div>
  );
}
