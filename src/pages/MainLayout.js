import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../Resources/css/custom.css";
import ExpenxsesTable from '../Components/Table/ExpenxsesTable';
import ExpensesImage from '../Components/Info/ExpensesImage';
import ExpensesInfo from '../Components/Info/ExpensesInfo';
import ExpensesForm from '../Components/Form/ExpensesForm';

const MainLayout = () => {

  let onExpensesFormSubmit = (newExpens) => {
    console.log(newExpens);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <ExpensesImage />
        <div className="col-sm-6 mt-5">
          <ExpensesInfo />
          <ExpensesForm formSubmit={onExpensesFormSubmit} />
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="custom-card ">
          <ExpenxsesTable />
        </div>
      </div>
    </div>
  )
}

export default MainLayout