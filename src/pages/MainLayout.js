import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Resources/css/custom.css";
import ExpensesImage from '../Components/Info/ExpensesImage';
import ExpensesForm from "../Components/Form/ExpensesForm"
import ExpenxsesTable from "../Components/Table/ExpenxsesTable"


class MainLayout extends Component {

  constructor() {
    super();
    this.state = { expenses: [] }

  }

  onExpensesFormSubmit = (newExpens) => {
    // console.log(newExpens);
    newExpens.id = Math.random();
    this.setState({ expenses: [newExpens, ...this.state.expenses] })
    // console.log(this.state.expenses)
  };


  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <ExpensesImage />
          <div className="col-sm-6 mt-5">

            <ExpensesForm formSubmit={this.onExpensesFormSubmit} />
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="custom-card ">
            {/* expenses={expenses} deleteExpenseHandler={onDeleteExpenseHandler} */}
            <ExpenxsesTable expenses= {this.state.expenses} />
          </div>
        </div>
      </div>
    )
  }
}
export default MainLayout