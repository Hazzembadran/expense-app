import React, { Component } from "react";
import ExpenxsesTableRow from "./ExpenxsesTableRow";


class ExpenxsesTable extends Component {
  render() {
    return (
      <table className="table ">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>value</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
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
          <ExpenxsesTableRow
            title={"Hazem"}
            date={"3-12-2024"}
            value={"Hazem Work"}
            description={"Hazem Hazem Hazem Hazem"}
            // deleteExpense={onDeleteExpense}
          />
        </tbody>
      </table>
    );
  }
}

export default ExpenxsesTable;
