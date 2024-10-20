import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Resources/css/custom.css";
import ExpensesImage from '../Components/Info/ExpensesImage';
import ExpensesForm from "../Components/Form/ExpensesForm"
import ExpenxsesTable from "../Components/Table/ExpenxsesTable"
import axios from "axios";


class MainLayout extends Component {

  constructor() {
    super();
    this.state = { expenses: [], resetForm: true }

  }

  componentDidMount() {
    this.fetchExpensesFromFirebase();
  };

  onExpensesFormSubmit = (newExpens) => {
    // console.log(newExpens);
    // newExpens.id = Math.random();
    // this.setState({ expenses: [newExpens, ...this.state.expenses], resetForm: true })
    // console.log(this.state.expenses)
    this.safeNewExpensInFirebase(newExpens)
  };

  safeNewExpensInFirebase = (newExpens) => {
    axios.post(
      `https://vp-expenses-app-default-rtdb.firebaseio.com/expenses.json`
      ,
      newExpens
    ).then((response) => {
      console.log(response);
      newExpens.id = response.data.name;
      this.setState({
        expenses: [newExpens, ...this.state.expenses]
      });

    }).catch((error) => {
      console.log(error.message);

    }).finally(()=>{
      this.setState({resetForm: true})
    })
  };

  fetchExpensesFromFirebase = () => {
    axios.get(
      `https://vp-expenses-app-default-rtdb.firebaseio.com/expenses.json`

    ).then((response) => {
      let expensesFromFirebase = [];
      for (let key in response.data) {
        let expense = response.data[key];
        expense.id = key;
        expensesFromFirebase.push(expense);
      }

      console.log("firebase" + expensesFromFirebase);
      this.setState({ expenses: expensesFromFirebase });

    }).catch((error) => {
      console.log(error)
    })
  };

  onDeleteExpenseHandler = (id) => {
    // console.log(id)
    this.deleteExpenseFromFirebase(id)

  };

  deleteExpenseFromFirebase = (id) => {
    axios.delete(
      `https://vp-expenses-app-default-rtdb.firebaseio.com/expenses${id}.json`
    ).then((response) => {
      console.log(response)
      let filterdExpenses = this.state.expenses.filter((element) => element.id !== id);
      this.setState({ expenses: filterdExpenses })
    }).catch((error) => {
      console.log(error.message)
    })

  };


  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <ExpensesImage />
          <div className="col-sm-6 mt-5">

            <ExpensesForm
              formSubmit={this.onExpensesFormSubmit}
              resetTag={this.state.resetForm} />
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="custom-card ">
            <ExpenxsesTable
              expenses={this.state.expenses}
              deleteExpenseHandler={this.onDeleteExpenseHandler} />
          </div>
        </div>
      </div>
    )
  }
}
export default MainLayout