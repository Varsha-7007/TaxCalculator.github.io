import Header from "../components/Header";
import CryptoTaxCalculatorContainer from "../components/CryptoTaxCalculatorContainer";
import styles from "./AusLongTerm.module.css";

const AusLongTerm = () => {
  return (
    <div className={styles.auslongTerm}>
      <Header />
      <CryptoTaxCalculatorContainer />
    </div>
  );
};

export default AusLongTerm;
