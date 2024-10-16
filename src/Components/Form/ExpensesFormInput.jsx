import React from "react";

const ExpensesFormInput = React.forwardRef((props, ref) => {
  return (
    <div className="mb-3 col-md-6">
      <label className="form-label">{props.title}</label>
      <input
        type={props.type}
        className={`form-control ${props.classInput}`}
        aria-describedby=""
        ref={ref}
      />
    </div>
  );
});



export default ExpensesFormInput;
