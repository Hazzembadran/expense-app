import React, { useContext } from "react";
import ExpenxsesTableRow from "./ExpenxsesTableRow";
import ExpensesContext from "../../Context/expenses-context";

const ExpenxsesTable = (props) => {
  // let onDeleteExpense = (id) => {
  //   props.deleteExpenseHandler(id);
  // };

  let expensesContext = useContext(ExpensesContext);

  return (
    <table className="table ">
      <thead>
        <tr>
          <th> Title</th>
          <th> Date</th>
          <th>value</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expensesContext.expensesData.map((element) => (
          <ExpenxsesTableRow
            key={element.id}
            id={element.id}
            title={element.title}
            date={element.date}
            value={element.value}
            description={element.description}
            // deleteExpense={onDeleteExpense}
          />
        ))}

        {/* {props.expenses.map((element) => (
          <ExpenxsesTableRow
            key={element.id}
            id={element.id}
            title={element.title}
            date={element.date}
            value={element.value}
            description={element.description}
            deleteExpense={onDeleteExpense}
          />
        ))} */}
      </tbody>
    </table>
  );
};

export default ExpenxsesTable;
