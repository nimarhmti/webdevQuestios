import React, { useState } from "react";
import "./ValidationFrom.css";
function ValidationForm() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(true);

  //

  //-----get date function
  const date = new Date();
  let content = <p>تاریخ تولد خود را وارد کنید</p>;
  let age = {};
  // handler function
  const dayInputHandler = (event) => {
    const day = +event.target.value;
    if (day) {
      setDay(day);
    } else {
      return;
    }
  };
  const monthInputHandler = (event) => {
    const month = +event.target.value;
    if (month) {
      setMonth(month);
    } else {
      return;
    }
  };
  const yearInputHandler = (event) => {
    const year = +event.target.value;
    if (year) {
      setYear(year);
    } else {
      return;
    }
  };

  const validationInput = (day, month, year) => {
    if (!day || !month || !year) {
      alert("لطفا تمام فلد ها را پر کنید!");
    } else if (day > 31 || month > 12 || year > date.getFullYear()) {
      alert("تاریخ تولد وارد شده نا معتبر است ");
    } else {
      setError(false);
      age = {
        day: Math.abs(date.getDate() - day),
        month: Math.abs(date.getMonth() - month + 1),
        year: Math.abs(date.getFullYear() - year),
      };
      return;
    }
  };

  const onSubmitionHandler = (event) => {
    event.preventDefault();
    validationInput(day, month, year);
  };
  console.log(age);
  return (
    <div className="validationFormSection">
      <form className="form" onSubmit={onSubmitionHandler}>
        <div>
          <label>روز</label>
          <input
            onChange={dayInputHandler}
            className="date"
            type="number"
            min="1"
            value={day}
          />
        </div>
        <div>
          <label>ماه</label>
          <input
            onChange={monthInputHandler}
            className="date"
            type="number"
            min="1"
            value={month}
          />
        </div>
        <div>
          <label>سال</label>
          <input
            onChange={yearInputHandler}
            className="date"
            type="number"
            min="1900"
            value={year}
          />
        </div>
        <div>
          <button className="validationButton">اعتبار سنجی</button>
        </div>
      </form>
      <div className="ageSection">{content}</div>
    </div>
  );
}

export default ValidationForm;
