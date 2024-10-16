import React from "react";

const ExpensesFormInput = ({ title, type, className }) => {
  return (
    <div className="mb-3 col-md-6">
      <label className="form-label">{title}</label>
      <input
        type={type}
        className={`form-control ${className}`}
        aria-describedby=""
      />
    </div>
  );
};

export default ExpensesFormInput;
