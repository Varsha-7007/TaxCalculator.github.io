import { useMemo } from "react";
import styles from "./KoinXLogo.module.css";

const KoinXLogo = ({
  imageDimensions,
  koinXLogoIconWidth,
  koinXLogoIconHeight,
  koinXLogoIconPosition,
  koinXLogoIconFlexShrink,
}) => {
  const koinXLogoIconStyle = useMemo(() => {
    return {
      width: koinXLogoIconWidth,
      height: koinXLogoIconHeight,
      position: koinXLogoIconPosition,
      flexShrink: koinXLogoIconFlexShrink,
    };
  }, [
    koinXLogoIconWidth,
    koinXLogoIconHeight,
    koinXLogoIconPosition,
    koinXLogoIconFlexShrink,
  ]);

  return (
    <img
      className={styles.koinxLogoIcon}
      alt=""
      src={imageDimensions}
      style={koinXLogoIconStyle}
    />
  );
};

export default KoinXLogo;
