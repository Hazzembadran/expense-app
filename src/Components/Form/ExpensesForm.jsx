import React, { useContext, useRef } from "react";
import ExpensesFormInput from "./ExpensesFormInput";
import ExpensesModel from "../../Model/ExpensesModel";
import ExpensesContext from "../../Context/expenses-context";
import Helper from "../../Utils/Helper";

const ExpensesForm = (props) => {
  let titleRef = useRef();
  let dateRef = useRef();
  let valueRef = useRef();
  let descriptionRef = useRef();

  let expensesContext = useContext(ExpensesContext);

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if (checkForm()) {
      let expensesModel = new ExpensesModel(
        titleRef.current.value,
        dateRef.current.value,
        valueRef.current.value,
        descriptionRef.current.value
      );

      expensesContext.newExpensesHandler(expensesModel);
      clear();
    }
  };

  let checkForm = () => {
    if (
      titleRef.current.value !== "" &&
      dateRef.current.value !== "" &&
      valueRef.current.value !== "" &&
      descriptionRef.current.value !== ""
    ) {
      return true;
    }
    Helper.showMessage("Error", "write the empty inputs", "error");
    return false;
  };

  let clear = () => {
    titleRef.current.value = "";
    dateRef.current.value = "";
    valueRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <form className="row" onSubmit={onSubmitHandler}>
      <ExpensesFormInput
        title="Title"
        type="text"
        classInput="addTitle"
        ref={titleRef}
      />
      <ExpensesFormInput
        title="Date"
        type="date"
        classInput="addDate"
        ref={dateRef}
      />
      <ExpensesFormInput
        title="Value"
        type="number"
        classInput="addValue"
        ref={valueRef}
      />
      <ExpensesFormInput
        title="Description"
        type="text"
        classInput="addDescription"
        ref={descriptionRef}
      />

      <div className="mb-3 col-md-12 text-right">
        <button type="submit" className="btn btn-primary addBtn">
          Add
        </button>
      </div>
    </form>
  );
};

export default ExpensesForm;
