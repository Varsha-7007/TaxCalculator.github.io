import styles from "./CryptoTaxCalculatorContainer.module.css";
import React, { useState, useEffect } from 'react';

const CryptoTaxCalculatorContainer = () => {


  const [cryptoPurchasePrice, setCryptoPurchasePrice] = useState('');
  const [cryptoSalePrice, setCryptoSalePrice] = useState('');
  const [expenses, setExpenses] = useState('');
  const [investmentType, setInvestmentType] = useState(''); 
  const [annualIncome, setAnnualIncome] = useState('');
  const [capitalGainsAmount, setCapitalGainsAmount] = useState(0);
  const [discountForLongTermGains, setDiscountForLongTermGains] = useState(0);
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [incomeTax, setIncomeTax] = useState(0);


  const getTaxRate = (income) => {
    if (income <= 18200) {
      return '0%';
    } else if (income <= 45000) {
      return `Nil + 19% of the excess over $18,200`;
    } else if (income <= 120000) {
      return `$5,092 + 32.5% of the excess over $45,000`;
    } else if (income <= 180000) {
      return `$29,467 + 37% of the excess over $120,000`;
    } else {
      return `$51,667 + 45% of the excess over $180,000`;
    }
  };

  const handleInvestmentTypeClick = (type) => {
    setInvestmentType(type);
  };

  const handleAnnualIncomeChange = (event) => {
    setAnnualIncome(event.target.value);
  };



  const calculateCapitalGains = () => {
    const purchasePrice = parseFloat(cryptoPurchasePrice) || 0;
    const salePrice = parseFloat(cryptoSalePrice) || 0;
    const expense = parseFloat(expenses) || 0;

    console.log('pp:',  purchasePrice);

    const capitalGains = salePrice -purchasePrice - expense;
    setCapitalGainsAmount(capitalGains >= 0 ? capitalGains : 0);

    console.log('Capital Gains:', capitalGainsAmount);
  };

  const calculateDiscountForLongTermGains = () => {
    const discount = capitalGainsAmount>=0 ? capitalGainsAmount * 0.5 : 0;
    setDiscountForLongTermGains(discount );

    console.log('Discount for Long Term Gains:', discountForLongTermGains);
  };

  const calculateNetCapitalGains = () => {
    if (investmentType === 'Long Term') {
      setNetCapitalGains(capitalGainsAmount - discountForLongTermGains);
    } else {
      setNetCapitalGains(capitalGainsAmount);
    }

    console.log('Net Capital Gains:', netCapitalGains);
  };
  

  const calculateIncomeTax = () => {
    const netCapitalGainsValue = parseFloat(netCapitalGains) || 0;
    const income = parseFloat(annualIncome.replace(/\$|,/g, '')) || 0;

    console.log('income:', income);
  
    if (investmentType === 'Long Term') {
      if (income <= 18200) {
        setIncomeTax(0);
      } else if (income <= 45000) {
        setIncomeTax(netCapitalGainsValue * 0.19);
      } else if (income <= 120000) {
        setIncomeTax(netCapitalGainsValue * 0.325);
      } else if (income <= 180000) {
        setIncomeTax(netCapitalGainsValue * 0.37);
      } else {
        setIncomeTax(netCapitalGainsValue * 0.45);
      }

    } else {
      if (income <= 18200) {
        setIncomeTax(0);
      } else if (income <= 45000) {
        setIncomeTax(netCapitalGainsValue * 0.19);
      } else if (income <= 120000) {
        setIncomeTax(netCapitalGainsValue * 0.325);
      } else if (income <= 180000) {
        setIncomeTax(netCapitalGainsValue * 0.37);
      } else {
        setIncomeTax(netCapitalGainsValue * 0.45);
      }

    }

    console.log('income tax:', incomeTax);
  };
  
  
  useEffect(() => {
    calculateCapitalGains();
  }, [cryptoPurchasePrice, cryptoSalePrice, expenses]);

  useEffect(() => {
    calculateDiscountForLongTermGains();
  }, [capitalGainsAmount]);

  useEffect(() => {
    calculateNetCapitalGains();
  }, [investmentType, capitalGainsAmount, discountForLongTermGains]);

  useEffect(() => {
    
    calculateIncomeTax();
  }, [netCapitalGains, annualIncome]);
 
  
  return (
    <div className={styles.div}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <a className={styles.frameA}>
              <div className={styles.freeCryptoTaxCalculatorAusParent}>
                <b className={styles.freeCryptoTax}>
                  Free Crypto Tax Calculator Australia
                </b>
                <div className={styles.frameGroup}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.maskGroupParent}>
                        <img
                          className={styles.maskGroupIcon}
                          alt=""
                          src="/mask-group.svg"
                        />
                        
                      </div>
                    </div>
                    
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.financialYearParent}>
                      <div className={styles.financialYear}>Financial Year</div>
                      <div className={styles.div1}>
                        <div className={`${styles.divInner} ${styles.dropdownContainer}`}>
                           <select className={styles.dropdown}>
                            <option value="">Select</option>
                            <option value="FY 2023-24">FY 2023-24</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className={styles.financialYearParent}>
                      <div className={styles.financialYear}>Country</div>
                      <div className={styles.div2}>
                        

                            <div className={`${styles.divInner} ${styles.dropdownContainer}`}>
                           <select className={styles.dropdown}>
                            <option value="">Select</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                          
                      </div>
                    </div>
                  </div>
                  <div className={styles.hr} />
                  <div className={styles.div3}>
                    <div className={styles.enterPurchasePriceOfCryptoParent}>
                      <div className={styles.financialYear}>
                        Enter purchase price of Crypto
                      </div>
                      <div className={styles.wrapper}>
                      <input type="text" value={`$${cryptoPurchasePrice}`} onChange={(e) => setCryptoPurchasePrice(e.target.value.replace(/^\$/, ''))} />
                      </div>
                    </div>
                    <div className={styles.enterPurchasePriceOfCryptoParent}>
                      <div className={styles.financialYear}>
                        Enter sale price of Crypto
                      </div>
                      <div className={styles.wrapper}>
                      <input type="text" value={`$${cryptoSalePrice}`} onChange={(e) => setCryptoSalePrice(e.target.value.replace(/^\$/, ''))} />

                      </div>
                    </div>
                  </div>
                  <div className={styles.div3}>
                    <div className={styles.enterPurchasePriceOfCryptoParent}>
                      <div className={styles.financialYear}>
                        Enter your Expenses
                      </div>
                      <div className={styles.wrapper}>
                      <input type="text" value={`$${expenses}`} onChange={(e) => setExpenses(e.target.value.replace(/^\$/, ''))} />

                      </div>
                    </div>
                    <div className={styles.investmentTypeParent}>
      <div className={styles.financialYear}>Investment Type</div>
      <div className={styles.frameParent3}>
        <div
          className={`${styles.component8Parent} ${
            investmentType === 'Short Term' ? styles.selected : ''
          }`}
          onClick={() => handleInvestmentTypeClick('Short Term')}
        >
          <div className={styles.component8}>
            <div className={styles.btc}>Short Term</div>
            {investmentType === 'Short Term' && (
              <img
                className={styles.tickSymbol}
                alt=""
                src="/frame-10000049141.svg"  
              />
            )}
          </div>
          <div className={styles.months}>{`< 12 months`}</div>
        </div>
        <div
          className={`${styles.component8Parent} ${
            investmentType === 'Long Term' ? styles.selected : ''
          }`}
          onClick={() => handleInvestmentTypeClick('Long Term')}
        >
          <div className={styles.component8}>
            <div className={styles.btc}>Long Term</div>
            {investmentType === 'Long Term' && (
              <img
                className={styles.tickSymbol}
                alt=""
                src="/frame-10000049141.svg"  
              />
            )}

                          </div>
                          <div className={styles.months1}>{`> 12 Months`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.div8}>
                    <div className={styles.enterPurchasePriceOfCryptoParent}>
                      <div className={styles.financialYear}>
                        Select Your Annual Income
                      </div>
                      <div className={styles.parent}>
                      <select
            className={styles.dropdown}
            value={annualIncome}
            onChange={handleAnnualIncomeChange}
          >
            <option value="">Select</option>
            <option value="$0 - $18,200">$0 - $18,200</option>
            <option value="$18,201 - $45,000">$18,201 - $45,000</option>
            <option value="$45,001 - $120,000">$45,001 - $120,000</option>
            <option value="$120,001 - $180,000">$120,001 - $180,000</option>
            <option value="$180,001+">$180,001+</option>
          </select>
                      </div>
                    </div>
                    <div className={styles.taxRateParent}>
                      <div className={styles.financialYear}>Tax Rate</div>
                      <div
                        className={styles.ofExcessOver}
                      >{getTaxRate(parseFloat(annualIncome.replace(/\$|,/g, '')) || 0)}</div>
                    </div>
                  </div>

                  {investmentType === 'Long Term' && (
                  <div className={styles.div3}>
                    <div className={styles.enterPurchasePriceOfCryptoParent}>
                      <div className={styles.financialYear}>
                        Capital gains amount
                      </div>
                      <div className={styles.wrapper}>
                      <div className={styles.btc}>$ {capitalGainsAmount}</div>
                      </div>
                    </div>
                    <div className={styles.enterPurchasePriceOfCryptoParent}>
                      <div className={styles.financialYear}>
                        Discount for long term gains
                      </div>
                      <div className={styles.wrapper}>
                      <div className={styles.btc}>$ {discountForLongTermGains}</div>
                      </div>
                    </div>
                  </div>
                  )}


                  <div className={styles.frameParent4}>
                    <div className={styles.netCapitalGainsTaxAmountParent}>
                      <div className={styles.btc}>
                        Net Capital gains tax amount
                      </div>
                      <b className={styles.b}>$ {netCapitalGains}</b>
                    </div>
                    <div className={styles.theTaxYouNeedToPayParent}>
                      <div className={styles.btc}>The tax you need to pay*</div>
                      <b className={styles.b1}>$ {incomeTax}</b>
                    </div>
                  </div>
                  
                </div>
              </div>
            </a>
          </div>
        </div>
        </div>
        
      <div className={styles.div22}>
        <div className={styles.divInner1}>
          <div className={styles.frameParent6}>
            <div className={styles.getStartedWithKoinxForFreParent}>
              <b className={styles.getStartedWith}>
                Get Started with KoinX for FREE
              </b>
              <div className={styles.withOurRange}>
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of your tax reports.
              </div>
            </div>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <div className={styles.groupWrapper}>
              <div className={styles.groupContainer}>
                <div className={styles.groupContainer}>
                  <div className={styles.frameWrapper8}>
                    <div className={styles.maskGroupParent}>
                      <div className={styles.getStartedFor}>
                        Get Started for FREE
                      </div>
                      <img
                        className={styles.iconlylightarrowRight}
                        alt=""
                        src="/iconlylightarrow--right2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CryptoTaxCalculatorContainer;
