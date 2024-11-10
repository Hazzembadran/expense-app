import "bootstrap/dist/css/bootstrap.css";
import "../Resources/css/custom.css";
import ExpenxsesTable from '../Components/Table/ExpenxsesTable';
import ExpensesImage from '../Components/Info/ExpensesImage';
import ExpensesInfo from '../Components/Info/ExpensesInfo';
import ExpensesForm from '../Components/Form/ExpensesForm';
import { useEffect, useState } from "react";
import ExpensesModel from "../Model/ExpensesModel";
import ExpensesContext from "../Context/expenses-context";
import Helper from "../Utils/Helper";

const MainLayout = () => {

  let [expenses, setExpenses] = useState([]);


  let onNewExpensesHandler = (newExpens) => {
    newExpens.id = expenses.length + 1;
    saveNewExpenesonFirebase(newExpens);
  };

  let saveNewExpenesonFirebase = (newExpense) => {

    fetch(`https://vp-expenses-app-default-rtdb.firebaseio.com/expenses.json`, {
      method: "POST",
      body: JSON.stringify(newExpense),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.json();
    }).then((result) => {

      newExpense.id = result.name;
      setExpenses((prevExpenses) => {
        return [newExpense, ...prevExpenses];
      })

    }).catch((error) => {
      console.error(error)

    })
  };


  let fetchExpensesFromFirebase = () => {
    fetch(
      `https://vp-expenses-app-default-rtdb.firebaseio.com/expenses.json`
      , {
        method: "GET",
      }).then((response) => {
        return response.json();

      })
      .then((result) => {
        let fbExpenses = [];
        for (let key in result) {

          let expeensesModel = new ExpensesModel(
            result[key].title,
            result[key].date,
            result[key].value,
            result[key].description
          );
          expeensesModel.id = key;
          fbExpenses.push(expeensesModel);
          setExpenses(fbExpenses);
        }
        // console.log(fbExpenses)
      })
      .catch((error) => {
        console.error(error)
      });
  };

  let onDeleteExpenseHandler = (id) => {
    deleteExpenseFromFirebase(id)
  };


  let deleteExpenseFromFirebase = (id) => {
    fetch(
      `https://vp-expenses-app-default-rtdb.firebaseio.com/expenses/${id}.json`
      , {
        method: "DELETE",
      }).then((response) => {
        return response.json();
      }).then((result) => {
        console.log(id)
        let filterdExpenses = expenses.filter((element) => element.id !== id);
        setExpenses(filterdExpenses);
        Helper.showMessage("Deleted!", "Expense Deleted Successfuly!", "success")
      }).catch((error) => {
        console.error(error)
      })

  }


  useEffect(fetchExpensesFromFirebase, []);


  return (
    <ExpensesContext.Provider value={{
      expensesData: expenses,
      newExpensesHandler: onNewExpensesHandler,
      deleteExpenesHandler: onDeleteExpenseHandler
    }} >
      <div className="container mt-5">
        <div className="row">
          <ExpensesImage />
          <div className="col-sm-6 mt-5">
            <ExpensesInfo />
            <ExpensesForm />
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="custom-card ">
            <ExpenxsesTable />
          </div>
        </div>
      </div>
    </ExpensesContext.Provider>
  )
}

export default MainLayout