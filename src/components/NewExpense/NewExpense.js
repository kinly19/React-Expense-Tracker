import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

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

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;   