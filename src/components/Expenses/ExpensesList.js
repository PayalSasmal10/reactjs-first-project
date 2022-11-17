import './ExpensesList.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
        if (props.items.length === 0){
            return <h2 className='expenses-list__fallback'>No expenese found....</h2>
        }
        return (
        <ul className='expenses-list'>
            {props.items.map((exps) => (
            <ExpenseItem
                key={exps.id}
                title={exps.title}
                amount={exps.amount}
                date={exps.date}
            />
            ))}
        </ul>
        );
        
        
}

export default ExpensesList;