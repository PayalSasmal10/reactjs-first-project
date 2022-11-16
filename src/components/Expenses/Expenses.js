import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

import ExpensesFilter from "../ExpensesFilters/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  // console.log("Item:",props.items);
  const [filterYear, setFilterYear] = useState("");
  console.log(filterYear);
  return (
    <div>
      <ExpensesFilter setFilterYear={setFilterYear} />
      <Card className="expenses">
        {/* Dynamic way to reder the list */}
        {props.items.map((exps) => (
          <ExpenseItem
            title={exps.title}
            amount={exps.amount}
            date={exps.date}
          />
        ))};
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
