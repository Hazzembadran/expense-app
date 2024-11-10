import React from "react";
import ExpensImage from "../../Resources/img/ex.jpg"

const ExpensesImage = () => {
  return (
    <div className="col-sm-6">
      <img src={ExpensImage} className="img-fluid" alt="ExpensImage" />
    </div>
  );
};

export default ExpensesImage;
