import React from "react";
import ExpenxsesTableRow from "./ExpenxsesTableRow";

const ExpenxsesTable = () => {
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
        <ExpenxsesTableRow />
      </tbody>
    </table>
  );
};

export default ExpenxsesTable;
