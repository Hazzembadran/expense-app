import React from "react";

const ExpenxsesTableRow = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.price}</td>
      <td colspan="2">{props.descrption}</td>
      <td class="text-right">
        <a href="#" class="delete">
          <i class="fa fa-trash-o" aria-hidden="true" />
        </a>
      </td>
    </tr>
    // <tr>
    //   <td> House rent </td>
    //   <td> 2022-05-09</td>
    //   <td>300$ </td>
    //   <td colspan="2">any descrption can be here </td>
    //   <td class="text-right">
    //     <a href="#" class="delete">
    //       <i class="fa fa-trash-o" aria-hidden="true" />
    //     </a>
    //   </td>
    // </tr>
  );
};

export default ExpenxsesTableRow;
