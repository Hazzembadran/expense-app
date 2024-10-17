import "bootstrap/dist/css/bootstrap.css";
import "../Resources/css/custom.css";
import ExpenxsesTable from '../Components/Table/ExpenxsesTable';
import ExpensesImage from '../Components/Info/ExpensesImage';
import ExpensesInfo from '../Components/Info/ExpensesInfo';
import ExpensesForm from '../Components/Form/ExpensesForm';
import { useState } from "react";

const MainLayout = () => {

  let [expenses, setExpenses] = useState([]);

  let onExpensesFormSubmit = (newExpens) => {
    newExpens.id = expenses.length + 1;
    // console.log(newExpens)
    setExpenses((prevExpenses) => {
      return [newExpens, ...prevExpenses];
    });
  };


  let onDeleteExpenseHandler = (id) => {
    console.log(id)
    let filterdExpenses = expenses.filter((element) => element.id !== id);
    setExpenses(filterdExpenses)
  }




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
          <ExpenxsesTable expenses={expenses} deleteExpenseHandler={onDeleteExpenseHandler}  />
        </div>
      </div>
    </div>
  )
}

export default MainLayout