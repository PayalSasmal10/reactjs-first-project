import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseHandler = (enteredExpenseData) => {
        console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div class="new-expense">
         <ExpenseForm  onSaveExpenseData={saveExpenseHandler} />
        </div>
    );
};

export default NewExpense;