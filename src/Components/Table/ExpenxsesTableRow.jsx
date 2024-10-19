import React, { Component } from "react";

class ExpenxsesTableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.date}</td>
        <td>{this.props.value}</td>
        <td colSpan="2">{this.props.description}</td>
        <td className="text-right">
        {/* onClick={onDeleteExpense} */}
          <a href="#" className="delete" >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </a>
        </td>
      </tr>
    );
  }
}

export default ExpenxsesTableRow;
