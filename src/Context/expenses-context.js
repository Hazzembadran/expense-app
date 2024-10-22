import React from "react"

let ExpensesContext = React.createContext({
  expensesData: [],
  newExpensesHandler: (newExpens) => { },
  deleteExpenesHandler: (id) => { }
});

export default ExpensesContext;