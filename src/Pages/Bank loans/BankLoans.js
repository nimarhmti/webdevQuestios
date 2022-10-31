import React from "react";
import Wrapper from "../../Components/UI/wrapper";
import BankLoansForm from "./BankLoansForm";
import "../Validation/Validation.css";
function BankLoans() {
  return (
    <div className="validation--section">
      <Wrapper>
        <BankLoansForm />
      </Wrapper>
    </div>
  );
}

export default BankLoans;
