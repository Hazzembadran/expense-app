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
    fetchExpensesFromFirebase();
  };

  onExpensesFormSubmit = (newExpens) => {
    // console.log(newExpens);
    // newExpens.id = Math.random();
    // this.setState({ expenses: [newExpens, ...this.state.expenses], resetForm: true })
    // console.log(this.state.expenses)
    this.safeNewExpensInFirebase(newExpens)
  };

  safeNewExpensInFirebase = (newExpens) => {
    axios.post("https://fake-api-expenses.firebaseio.com/expenses.json",
      newExpens
    ).then((response) => {
      console.log(response);
      newExpens.id = response.data.name;
      this.setState({
        expenses: [newExpens, ...this.state.expenses],
        resetForm: true
      });

    }).catch((error) => {
      console.log(error.message);
    })
  };

  fetchExpensesFromFirebase = () => {
    axios.get(
      "https://fake-api-expenses.firebaseio.com/expenses.json"
    ).then((response) => {
      let expensesFromFirebase = [];
      for (key in response.data) {
        response.data[expensesFromFirebase].id = key;
        expensesFromFirebase.push(response.data[key]);
      }

      this.setState({ expenses: expensesFromFirebase })

    }).catch((error) => {
      console.log(error.message)
    })
  };

  onDeleteExpenseHandler = (id) => {
    // console.log(id)
    let filterdExpenses = this.state.expenses.filter((element) => element.id !== id);
    this.setState({ expenses: filterdExpenses })
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