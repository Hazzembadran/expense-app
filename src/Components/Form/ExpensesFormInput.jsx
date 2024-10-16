import React from "react";

const ExpensesFormInput = ({ title, type, className }) => {
  return (
    <div class="mb-3 col-md-6">
      <label class="form-label">{title}</label>
      <input
        type={type}
        className={`form-control ${className}`}
        aria-describedby=""
      />
    </div>
  );
};

export default ExpensesFormInput;
