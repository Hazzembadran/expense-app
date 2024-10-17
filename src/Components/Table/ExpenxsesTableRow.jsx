import React from "react";

const ExpenxsesTableRow = (props) => {
  let onDeleteExpense= ()=> {
    // console.log(props.id)
    props.deleteExpense(props.id)
  };
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.value}</td>
      <td colSpan="2">{props.description}</td>
      <td className="text-right">
        <a href="#" className="delete" onClick={onDeleteExpense}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </a>
      </td>
    </tr>
  );
};

export default ExpenxsesTableRow;
