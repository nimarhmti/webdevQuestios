import React, { useState } from "react";
import "./ValidationFrom.css";
function ValidationForm() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(true);
  const [age, setAge] = useState();

  //

  //-----get date function
  const date = new Date();
  let content = <p>تاریخ تولد خود را وارد کنید</p>;

  // handler function
  const dayInputHandler = (event) => {
    const day = +event.target.value;
    setDay(day);
  };
  const monthInputHandler = (event) => {
    const month = +event.target.value;
    setMonth(month);
  };
  const yearInputHandler = (event) => {
    const year = +event.target.value;
    setYear(year);
  };

  const validationInput = (day, month, year) => {
    if (!day || !month || !year) {
      alert("لطفا تمام فلد ها را پر کنید!");
    } else if (day > 31 || month > 12 || year > date.getFullYear()) {
      alert("تاریخ تولد وارد شده نا معتبر است ");
    } else {
      setError(false);
      return {
        day: Math.abs(date.getDate() - day),
        month: Math.abs(date.getMonth() - month + 1),
        year: Math.abs(date.getFullYear() - year),
      };
    }
  };

  const onSubmitionHandler = (event) => {
    event.preventDefault();
    const age = validationInput(day, month, year);
    setAge(age);
  };
  if (age) {
    content = (
      <p>
        سن شما:
        {age.day}روز {age.month} ماه {age.year}سال
      </p>
    );
  }

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
