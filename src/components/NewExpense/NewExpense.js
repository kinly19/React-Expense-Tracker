import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = ({onAddExpense}) => {

    const [isToggle, setIsToggle] = useState(false);//set false for defualt value
    console.log(isToggle)

    //create a function which takes an argument (eneterdExpenseData) and spreads it. We pass this function down into our child component (expenseForm), 
    //from our child component we call the function and pass in data as a parameter (expenseData). this way we can pass data back up from a child to a parent with a function. 
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //pull out all the key value pairs and add to this object
            id: Math.random().toString()
        };
        console.log(expenseData);
        onAddExpense(expenseData);
    };

    //pass this function down to ExpenseForm
    const handleCloseForm = (toggleStatus) => {
        setIsToggle(toggleStatus);
    }

    const handleShowForm = () => {
        setIsToggle(true)
    }

    //Alternative return a fallback class that just shows the a button, when clicked to show expenseForm 
    // if (isToggle === false ) {
    //   return <div className="new-expense"><button onClick={handleForm}>Add new expense </button></div>
    // }

    return (
        <div className="new-expense">
            {!isToggle && <button onClick={handleShowForm}>Add new expense </button>}
            {isToggle && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={handleCloseForm}/>}
        </div>
    )
};

export default NewExpense;   