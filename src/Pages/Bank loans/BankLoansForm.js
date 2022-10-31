import React, { useState } from "react";
import "../Validation/ValidationFrom.css";
function BankLoansForm() {
  const [amount, setAmount] = useState({});
  const [numOfInstallm, setNumOfInstallm] = useState({});
  const [profit, setProfit] = useState({});
  const [payment, setPayment] = useState(false);
  const maxAmount = 200000000;
  const minAmount = 1000000;
  //handler functions
  const amountInputHandler = (event) => {
    setAmount(+event.target.value);
  };
  const numOfInstallmInputHandler = (event) => {
    setNumOfInstallm(+event.target.value);
  };
  const profitInputHandler = (event) => {
    setProfit(+event.target.value);
  };

  const validationInput = (amount, numOfInstallm, profit) => {
    if (!amount || !numOfInstallm || !profit) {
      alert("لطفا تمام فلد ها را پر کنید!");
    } else {
      const totlaProfit = (amount * (profit / 100) * numOfInstallm + 1) / 2400;
      const totlaAmount = (amount + totlaProfit) / numOfInstallm;
      setPayment(totlaAmount.toFixed(2));
    }
  };

  const onSubmitionHandler = (event) => {
    event.preventDefault();
    validationInput(amount, numOfInstallm, profit);
  };
  return (
    <div className="validationFormSection">
      <form className="form" onSubmit={onSubmitionHandler}>
        <div>
          <label>تعداد اقساط</label>
          <input
            onChange={numOfInstallmInputHandler}
            className="date"
            type="number"
            min="12"
            max="36"
            value={numOfInstallm}
          />
        </div>
        <div>
          <label>مبلغ وام </label>
          <input
            onChange={amountInputHandler}
            className="date"
            type="number"
            min={minAmount}
            max={maxAmount}
            value={amount}
          />
        </div>
        <div>
          <label>نرخ سود</label>
          <input
            onChange={profitInputHandler}
            className="date"
            type="number"
            min="4"
            max="18"
            value={profit}
          />
        </div>
        <div>
          <button className="validationButton">نمایش مبلغ پرداختی</button>
        </div>
      </form>
      <div className="ageSection">
        {payment
          ? `مبلغ پرداختی : ${payment}`
          : "جهت نمایش مبلغ پرداختی فرم را پر کنید"}
      </div>
    </div>
  );
}

export default BankLoansForm;
