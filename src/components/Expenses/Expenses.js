import Card from "../UI/Card";
import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesCharts from "./ExpensesCharts";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  // console.log(filterYear);
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    
  };

  const filteredYearExpenses = props.items.filter((exps) => {
    return exps.date.getFullYear().toString() === filterYear;
  });

  let expense
  return (
    <div>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      <Card className="expenses">
        {/* Dynamic way to reder the list */}
      <ExpensesCharts expenses={filteredYearExpenses}/>
      <ExpensesList items={filteredYearExpenses}/>

        {/* This way we can also do but this is the manual way  */}
        {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} ></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
