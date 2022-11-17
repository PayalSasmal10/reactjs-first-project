import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


const NewExpense = (props) => {

    const [IsEditing, setIsEditing] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const cancelEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div class="new-expense">
         {!IsEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
         {IsEditing && (<ExpenseForm  onSaveExpenseData={saveExpenseHandler} onCancel={cancelEditingHandler}/>)}
        </div>
    );
};

export default NewExpense;