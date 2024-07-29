import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";
import React, { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = (expense) => {
    setExpenses((previousExpense) => {
      return [...previousExpense, expense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses setExpenses={setExpenses} items={expenses} />
    </div>
  );
};
// }
export default App;
