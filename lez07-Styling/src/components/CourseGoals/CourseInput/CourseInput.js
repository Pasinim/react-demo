import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      console.log(event.target.value);
      setIsValid(true); //perchè non cambia il colore del textbox?
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    //setIsValid(true);
    //setEnteredValue(""); //perchè non pulisce input?
  };

  //style={{ color: isValid ? "black" : "red" }}
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? "" : "invalid"}`}>
        <label>Course Goal</label>
        <input
          // style={{
          //   borderColor: isValid ? "black" : "red",
          //   background: isValid ? "trasparent" : "salmon",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit"></Button>
    </form>
  );
};

export default CourseInput;
