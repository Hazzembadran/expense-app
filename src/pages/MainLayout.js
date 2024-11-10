import "bootstrap/dist/css/bootstrap.css";
import "../Resources/css/custom.css";
import ExpenxsesTable from '../Components/Table/ExpenxsesTable';
import ExpensesImage from '../Components/Info/ExpensesImage';
import ExpensesInfo from '../Components/Info/ExpensesInfo';
import ExpensesForm from '../Components/Form/ExpensesForm';
import { useEffect, useState } from "react";
import ExpensesModel from "../Model/ExpensesModel";
import ExpensesContext from "../Context/expenses-context";
import Swal from "sweetalert2";

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

      // console.log(result.name);
      newExpense.id = result.name;
      setExpenses((prevExpenses) => {
        return [newExpense, ...prevExpenses];
      })

    }).catch((error) => {

    })
  };


  let fetchExpensesFromFirebase = () => {
    fetch(
      `https://vp-expenses-app-default-rtdb.firebaseio.com/expenses.json`
      , {
        method: "GET",
      }).then((response) => {
        // console.log(response.json())
        return response.json();

      })
      .then((result) => {
        // console.log(result); 
        let fbExpenses = [];
        for (let key in result) {
          // console.log(key)
          // console.log(result[key]);
          let expeensesModel = new ExpensesModel(
            result[key].tilte,
            result[key].date,
            result[key].value,
            result[key].description
          );
          expeensesModel.id = key;
          fbExpenses.push(expeensesModel);
          setExpenses(fbExpenses);
        }
      })
      .catch((error) => {
        console.error(error)
      });
  };

  let onDeleteExpenseHandler = (id) => {
    console.log(id)

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
        let filterdExpenses = expenses.filter((element) => element.id !== id);
        setExpenses(filterdExpenses)
        Swal.fire({
          title: "Deleted!",
          text: "Expense Deleted Successfuly!",
          icon: "success",
          showConfirmButton :false,

          timer: 1333
        });
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