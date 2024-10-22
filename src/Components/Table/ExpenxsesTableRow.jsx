import React, { useContext } from "react";
import ExpensesContext from "../../Context/expenses-context";

const ExpenxsesTableRow = (props) => {
  let expensesContext = useContext(ExpensesContext);
  let onDeleteExpense= ()=> {
    // console.log(props.id)
    // props.deleteExpense(props.id)
    expensesContext.deleteExpenesHandler(props.id);
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
