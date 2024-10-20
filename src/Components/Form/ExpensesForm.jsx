import React, { Component } from "react";
import ExpensesModel from "../../Model/ExpensesModel";

export class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      titleValue: "",
      dateValue: "",
      priceValue: "",
      descriptionValue: "",
    };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    if (this.validatFrorm()) {
      let expensesModel = new ExpensesModel(
        this.state.titleValue,
        this.state.dateValue,
        this.state.priceValue,
        this.state.descriptionValue
      );
      // console.log(expensesModel);
      this.props.formSubmit(expensesModel);

      if (this.props.resetTag) {
        this.clearForm();
      }
    }
  };

  validatFrorm = () => {
    if (
      (this.state.titleValue !== "" &&
      this.state.dateValue !== ""&&
      this.state.priceValue !== ""&&
      this.state.descriptionValue !== "")
    ) {
      return true;
    }

    return false;
  };

  clearForm = () => {
    console.log("From clear form");
    this.setState({
      titleValue: "",
      dateValue: "",
      priceValue: "",
      descriptionValue: "",
    });
  };

  onTitleChangeHandler = (content) => {
    this.setState({ titleValue: content.target.value });
  };

  onDateChangeHandler = (content) => {
    this.setState({ dateValue: content.target.value });
  };

  onValueChangeHandler = (content) => {
    this.setState({ priceValue: content.target.value });
  };

  onDescriptionChangeHandler = (content) => {
    this.setState({ descriptionValue: content.target.value });
  };

  render() {
    return (
      <form className="row" onSubmit={this.onSubmitHandler}>
        <div className="mb-3 col-md-6">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control addTitle"
            aria-describedby=""
            onChange={this.onTitleChangeHandler}
          />
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control addDate"
            aria-describedby=""
            onChange={this.onDateChangeHandler}
          />
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label">Value</label>
          <input
            type="text"
            className="form-control addValue"
            aria-describedby=""
            onChange={this.onValueChangeHandler}
          />
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control addDescription"
            aria-describedby=""
            onChange={this.onDescriptionChangeHandler}
          />
        </div>

        <div className="mb-3 col-md-12 text-right">
          <button type="submit" className="btn btn-primary addBtn">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default ExpensesForm;
