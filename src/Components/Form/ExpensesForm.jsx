import React from "react";

const ExpensesForm = () => {
  return (
    <form className="row">
      <div className="mb-3 col-md-6">
        <label className="form-label">Title</label>
        <input type="text" className="form-control addTitle" aria-describedby="" />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Date</label>
        <input type="date" className="form-control addDate" aria-describedby="" />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Value</label>
        <input
          type="number"
          className="form-control addValue"
          aria-describedby=""
        />
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="title" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control addDescrption"
          aria-describedby=""
        />
      </div>
      <div className="mb-3 col-md-12 text-right">
        <button type="submit" className="btn btn-primary addBtn">
          Add
        </button>
      </div>
    </form>
  );
};

export default ExpensesForm;
