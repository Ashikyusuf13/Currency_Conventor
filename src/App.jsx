import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [tocurrency, setTocurrency] = useState("INR");
  const [fromcurrency, setFromcurrency] = useState("USD");
  const [convertedamt, setConvertedamt] = useState();
  const [exchangeRate, setExchangeRate] = useState();

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;
        const result = await axios.get(url);
        setExchangeRate(result.data.rates[tocurrency]);
      } catch (error) {
        alert("Something went wrong");
      }
    };
    getExchangeRate();
  }, [fromcurrency, tocurrency]);

  useEffect(() => {
    if (fromcurrency != null) {
      setConvertedamt((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  return (
    <>
      <div className="currency_converter">
        <div className="img"></div>
        <div className="data">
          <h1>Currency Converter</h1>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Enter the Amount"
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="fromcurrency">
            <label htmlFor="fromcurrency">From Currency</label>
            <select
              id="fromcurrency"
              value={fromcurrency}
              onChange={(e) => setFromcurrency(e.target.value)}
            >
              <option value="USD">USD - United state Doller</option>
              <option value="EUR">EUR - Euro</option>
              <option value="INR">INR - India</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
              <option value="CHF">CHF - Swiss Franc</option>
              <option value="SGD">SGD - Singapore Dollar</option>
              <option value="NZD">NZD - New Zealand Dollar</option>
              <option value="MXN">MXN - Mexican Peso</option>
              <option value="SEK">SEK - Swedish Krona</option>
              <option value="NOK">NOK - Norwegian Krone</option>
              <option value="KRW">KRW - South Korean Won</option>
              <option value="TRY">TRY - Turkish Lira</option>
              <option value="RUB">RUB - Russian Ruble</option>
              <option value="SAR">SAR - Saudi Riyal</option>
              <option value="AED">AED - UAE Dirham</option>
              <option value="HKD">HKD - Hong Kong Dollar</option>
              <option value="THB">THB - Thai Baht</option>
              <option value="IDR">IDR - Indonesian Rupiah</option>
              <option value="MYR">MYR - Malaysian Ringgit</option>
              <option value="PLN">PLN - Polish Zloty</option>
              <option value="DKK">DKK - Danish Krone</option>
              <option value="EGP">EGP - Egyptian Pound</option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="BDT">BDT - Bangladeshi Taka</option>
              <option value="NGN">NGN - Nigerian Naira</option>
              <option value="ILS">ILS - Israeli Shekel</option>
              <option value="TWD">TWD - Taiwan Dollar</option>
              <option value="VND">VND - Vietnamese Dong</option>
              <option value="PHP">PHP - Philippine Peso</option>
            </select>
          </div>

          <div className="tocurrency">
            <label htmlFor="tocurrency">To Currency</label>
            <select
              id="tocurrency"
              value={tocurrency}
              onChange={(e) => setTocurrency(e.target.value)}
            >
              <option value="USD">USD - United state Doller</option>
              <option value="EUR">EUR - Euro</option>
              <option value="INR">INR - India</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
              <option value="CHF">CHF - Swiss Franc</option>
              <option value="SGD">SGD - Singapore Dollar</option>
              <option value="NZD">NZD - New Zealand Dollar</option>
              <option value="MXN">MXN - Mexican Peso</option>
              <option value="SEK">SEK - Swedish Krona</option>
              <option value="NOK">NOK - Norwegian Krone</option>
              <option value="KRW">KRW - South Korean Won</option>
              <option value="TRY">TRY - Turkish Lira</option>
              <option value="RUB">RUB - Russian Ruble</option>
              <option value="SAR">SAR - Saudi Riyal</option>
              <option value="AED">AED - UAE Dirham</option>
              <option value="HKD">HKD - Hong Kong Dollar</option>
              <option value="THB">THB - Thai Baht</option>
              <option value="IDR">IDR - Indonesian Rupiah</option>
              <option value="MYR">MYR - Malaysian Ringgit</option>
              <option value="PLN">PLN - Polish Zloty</option>
              <option value="DKK">DKK - Danish Krone</option>
              <option value="EGP">EGP - Egyptian Pound</option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="BDT">BDT - Bangladeshi Taka</option>
              <option value="NGN">NGN - Nigerian Naira</option>
              <option value="ILS">ILS - Israeli Shekel</option>
              <option value="TWD">TWD - Taiwan Dollar</option>
              <option value="VND">VND - Vietnamese Dong</option>
              <option value="PHP">PHP - Philippine Peso</option>
            </select>
          </div>

          <div className="result">
            <p>
              {amount} {fromcurrency} is equal to {convertedamt} {tocurrency}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
