import React from "react";
import ExpensesFormInput from "./ExpensesFormInput";

const ExpensesForm = () => {
  return (
    <form className="row">
      <ExpensesFormInput title="Title" type="text" classInput="addTitle" />
      <ExpensesFormInput title="Date" type="date" classInput="addDate" />
      <ExpensesFormInput title="Value" type="text" classInput="addValue" />
      <ExpensesFormInput
        title="Description"
        type="text"
        classInput="addDescription"
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
