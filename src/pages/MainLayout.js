import "bootstrap/dist/css/bootstrap.css";
import "../Resources/css/custom.css";
import ExpenxsesTable from '../Components/Table/ExpenxsesTable';
import ExpensesImage from '../Components/Info/ExpensesImage';
import ExpensesInfo from '../Components/Info/ExpensesInfo';
import ExpensesForm from '../Components/Form/ExpensesForm';
import { useEffect, useState } from "react";
import ExpensesModel from "../Model/ExpensesModel";

const MainLayout = () => {

  let [expenses, setExpenses] = useState([]);



  let onExpensesFormSubmit = (newExpens) => {
    newExpens.id = expenses.length + 1;
    // console.log(newExpens)
    // setExpenses((prevExpenses) => {
    //   return [newExpens, ...prevExpenses];
    // });
    saveNewExpenesonFirebase(newExpens);
  };

  let saveNewExpenesonFirebase = (newExpense) => {
    fetch("https://fake-api-expenses.firebaseio.com/expenses.json", {
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
    fetch("https://fake-api-expenses.firebaseio.com/expenses.json", {
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

      });
  };

  let onDeleteExpenseHandler = (id) => {
    console.log(id)

  };


  let deleteExpenseFromFirebase = (id) => {
    fetch(`https://fake-api-expenses.firebaseio.com/expenses/${id}.json`, {
      method: "DELETE",
    }).then((response) => {
      return response.json();
    }).then((result) => {
      let filterdExpenses = expenses.filter((element) => element.id !== id);
      setExpenses(filterdExpenses)
      // Swal.fire({
      //   title: "Deleted!",
      //   text: "Expense Deleted Successfuly!",
      //   icon: "warning",
      //   showConfirmButtion: false,
      //   timer: 1500
      // });
    }).catch((error) => {

    })

  }



  useEffect(fetchExpensesFromFirebase, []);






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
          <ExpenxsesTable expenses={expenses} deleteExpenseHandler={onDeleteExpenseHandler} />
        </div>
      </div>
    </div>
  )
}

export default MainLayout