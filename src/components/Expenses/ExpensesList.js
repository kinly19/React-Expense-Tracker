import './ExpensesList.scss'; 
import ExpenseItem from './ExpenseItem';

//If what your component returns changes entirely based on different conditions, you can use this approach 
//if statement below is true it will return our expenses-list__fallback class otherwise it return expenses-list class
const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;