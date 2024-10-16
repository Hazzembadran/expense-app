import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../Resources/css/custom.css";
import ExpenxsesTable from '../Components/Table/ExpenxsesTable';
import ExpensesImage from '../Components/Info/ExpensesImage';
import ExpensesInfo from '../Components/Info/ExpensesInfo';
import ExpensesForm from '../Components/Form/ExpensesForm';

const MainLayout = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <ExpensesImage />
        <div class="col-sm-6 mt-5">
          <ExpensesInfo />
          <ExpensesForm />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="custom-card ">
          <ExpenxsesTable />
        </div>
      </div>
    </div>
  )
}

export default MainLayout