import { useEffect } from "react";
import Header from "../components/Header";
import CryptoTaxCalculatorContainer from "../components/CryptoTaxCalculatorContainer";
import styles from "./AusLongTerm.module.css";

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AusLongTerm from "./pages/AusLongTerm";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
   // <Routes>
      //<Route path="/" element={<AusLongTerm />} />
    //</Routes>
    <div className={styles.auslongTerm}>
      <Header />
      <CryptoTaxCalculatorContainer />
    </div>
  );
}
export default App;
