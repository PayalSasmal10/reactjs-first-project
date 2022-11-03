import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

const  ExpenseItem = (props) => {
  
    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const day = props.date.toLocaleString('es-US', {day: '2-digit'} );
    // const year = props.date.getFullYear();

    const btnClick = () => {
      console.log("Clicked Me!");
    }
  
    return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={btnClick}>Click Me</button>
    </Card>
  );
}

export default ExpenseItem;
