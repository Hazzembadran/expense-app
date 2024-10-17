import React from "react";
import ExpenxsesTableRow from "./ExpenxsesTableRow";

const ExpenxsesTable = (props) => {
  let onDeleteExpense = (id) => {
    props.deleteExpenseHandler(id);
  };

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
        {props.expenses.map((element) => (
          <>
          {/* {console.log(element)} */}
          <ExpenxsesTableRow
            key={element.id}
            id={element.id}
            title={element.title}
            date={element.date}
            value={element.value}
            description={element.description}
            deleteExpense={onDeleteExpense}/>
            </>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenxsesTable;
