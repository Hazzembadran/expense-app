import React from "react";

const ExpenxsesTableRow = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.value}</td>
      <td colSpan="2">{props.description}</td>
      <td className="text-right">
        <a href="#" className="delete">
          <i className="fa fa-trash-o" aria-hidden="true" />
        </a>
      </td>
    </tr>
    // <tr>
    //   <td> House rent </td>
    //   <td> 2022-05-09</td>
    //   <td>300$ </td>
    //   <td colspan="2">any descrption can be here </td>
    //   <td className="text-right">
    //     <a href="#" className="delete">
    //       <i className="fa fa-trash-o" aria-hidden="true" />
    //     </a>
    //   </td>
    // </tr>
  );
};

export default ExpenxsesTableRow;
