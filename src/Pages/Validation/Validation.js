import React from "react";
import ValidationForm from "./ValidationForm";
import Warapper from "../../Components/UI/wrapper";
import "./Validation.css";
function Validation() {
  return (
    <div className="validation--section">
      <Warapper>
        <ValidationForm />
      </Warapper>
    </div>
  );
}

export default Validation;
