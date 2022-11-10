import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (propos) => {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        propos.onAddExpense(expenseData);
    };
    return (
        <div class="new-expense">
         <ExpenseForm  onSaveExpenseData={saveExpenseHandler} />
        </div>
    );
};

export default NewExpense;