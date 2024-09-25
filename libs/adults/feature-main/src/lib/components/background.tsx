import styles from './background.module.css';
import Loader from './loader';

interface BackgroundProps {
  disableStartAnimation?: boolean;
  animationVariables?:
    | 'defaults'
    | {
        initialIdle: number;
        bgFill: number;
        logoSpin: number;
        letterFallDelay: number;
        initialLogoStay: number;
        appearMainLogo: number;
      }
    | undefined;
}

const generateTrianglesWithFloats = () => {
  const get5to15 = () => Math.floor(Math.random() * 10) + 5;
  const getCoinFlip = () => (Math.random() > 0.5 ? 1 : -1);

  const triangles = [];
  const quantity = {
    tr1: 10,
    tr2: 8,
    tr3: 3,
    tr4: 7,
  } as { [key: string]: number };

  for (let i = 0; i < Object.keys(quantity).length; i++) {
    for (let j = 0; j < quantity[`tr${i + 1}`]; j++) {
      const xFloat = get5to15() * getCoinFlip();
      const yFloat = get5to15() * getCoinFlip();
      const aFloat = get5to15() * getCoinFlip();
      const tFloat = get5to15();
      triangles.push(
        <div
          key={`${i}-${j}`}
          className={`${styles[`tr${i + 1}`]}`}
          style={
            {
              '--f-t-x': `${xFloat}px`,
              '--f-t-y': `${yFloat}px`,
              '--f-t-a': `${aFloat}deg`,
              '--f-t-t': `${tFloat * 2000}ms`,
            } as React.CSSProperties
          }
        />
      );
    }
  }
  return triangles;
};

/**
 * The background component of the app, which is responsible for animating
 * a triangle mesh in the background. It also contains a loader that appears
 * before the app is rendered.
 *
 * @param {BackgroundProps} props - The background component props.
 * @param {boolean} [props.disableStartAnimation=false] - Whether to disable the start animation.
 * @param {object} [props.animationVariables=undefined] - An object containing variables for the animations.
 * If set to "defaults", the default values will be used. Otherwise, the object should contain the following properties:
 * - initialIdle: The time in milliseconds that the animation should wait before starting.
 * - bgFill: The time in milliseconds that the background should take to fill.
 * - logoSpin: The time in milliseconds that the logo should take to spin.
 * - letterFallDelay: The time in milliseconds that each letter should take to fall.
 * - initialLogoStay: The time in milliseconds that the logo should stay at after completion of the animation.
 * - appearMainLogo: The time in milliseconds that the main logo should take to appear.
 *
 * - the main logo appearance delay calculated by the following formula:
 * initialIdle + bgFill + logoSpin + letterFallDelay * 6 + initialLogoStay
 */
export default function Background({
  disableStartAnimation = false,
  animationVariables = undefined,
}: BackgroundProps) {
  if (animationVariables === 'defaults') {
    animationVariables = {
      initialIdle: 100,
      bgFill: 400,
      logoSpin: 2000,
      letterFallDelay: 75,
      initialLogoStay: 1000,
      appearMainLogo: 2000,
    };
  }

  const animationCSSVariables = animationVariables
    ? ({
        '--a-t-init-idle': `${animationVariables.initialIdle}ms`,
        '--a-t-bg-fill': `${animationVariables.bgFill}ms`,
        '--a-t-logo-spin': `${animationVariables.logoSpin}ms`,
        '--a-t-letter-fall-delay': `${animationVariables.letterFallDelay}ms`,
        '--a-t-initial-logo-stay': `${animationVariables.initialLogoStay}ms`,
        '--a-t-appear-main-logo': `${animationVariables.appearMainLogo}ms`,
        '--a-t-bg-await': 'calc(var(--a-t-init-idle) + var(--a-t-bg-fill))',
        '--a-t-disappear-delay':
          'calc(var(--a-t-bg-await) + var(--a-t-logo-spin) + var(--a-t-letter-fall-delay) * 6 + var(--a-t-initial-logo-stay))',
        '--a-t-appear-main-logo-delay':
          'calc(var(--a-t-bg-await) + var(--a-t-disappear-delay) + 200ms)',
      } as React.CSSProperties)
    : undefined;

  return (
    <div className={styles.background} style={animationCSSVariables}>
      <div
        className={
          disableStartAnimation ? styles.container : `${styles.container} ${styles.startAnimation}`
        }
      >
        {generateTrianglesWithFloats()}
        {!disableStartAnimation && <Loader />}
      </div>
    </div>
  );
}
