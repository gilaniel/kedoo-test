'use client';

import Background from './components/background';
import LogoSvg from './components/svg/LogoSvg';
import styles from './page.module.css';

export function MainPage() {
  return (
    <>
      <Background
      // // required if timing variables are not defined in globals.css
      //
      // animationVariables={{
      //   initialIdle: 1000,
      //   bgFill: 400,
      //   logoSpin: 2000,
      //   letterFallDelay: 75,
      //   initialLogoStay: 1000,
      //   appearMainLogo: 2000,
      // }}
      //
      // or
      //
      // animationVariables="defaults"
      />
      <div className={styles.container}>
        <LogoSvg className={`${styles.logo} ${styles.startAnimation}`} />
      </div>
    </>
  );
}

export default MainPage;
