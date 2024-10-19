import React, { Component } from "react";

class ExpensesFormInput extends Component {
  render() {
    return (
      <div className="mb-3 col-md-6">
        <label className="form-label">{this.props.title}</label>
        <input
          type={this.props.type}
          className={`form-control ${this.props.classInput}`}
          aria-describedby=""
        />
      </div>
    );
  }
}

export default ExpensesFormInput;
