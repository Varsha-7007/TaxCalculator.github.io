import KoinXLogo from "./KoinXLogo";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <div className={styles.fullScreenWrapper}>
    <div className={styles.frameParent}>
      <div className={styles.koinxLogoWrapper}>
        <KoinXLogo
          imageDimensions="/1-koinx-logo2.svg"
          koinXLogoIconWidth="96px"
          koinXLogoIconHeight="24px"
          koinXLogoIconPosition="relative"
          koinXLogoIconFlexShrink="0"
        />
      </div>
      
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.featuresWrapper}>
            <div className={styles.features}>Features</div>
          </div>
          <div className={styles.exchangesWrapper}>
            <div className={styles.features}>Exchanges</div>
          </div>
          <div className={styles.exchangesWrapper}>
            <div className={styles.features}>How it Works?</div>
          </div>
          <div className={styles.blogWrapper}>
            <div className={styles.blog}>Blog</div>
          </div>
          <div className={styles.exchangesWrapper}>
            <div className={styles.features}>About us</div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.signInWrapper}>
            <div className={styles.features}>Sign In</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
