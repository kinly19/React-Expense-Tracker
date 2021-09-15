import ExpenseDate from './ExpenseDate';
import './ExpenseItem.scss'

const ExpenseItem = ({ date, title, amount }) => {
  //destructuring props.

  //take the data below and move that into App.js and pass the data from App.js back into here via props
  // const expenseDate = new Date (2021, 9, 15);
  // const expenseTitle = 'Car insurance';
  // const expenseAmount = '294.50';

  return (
    //can only have one! root element in this statement, but can wrap inside of another opening and closing div to work around it.
    <div className="expense-item">
        <ExpenseDate date={date}/> {/* date comes from app.js but we are also passing that down into ExpenseDate component */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{amount}</div>
        {/* without destructuring (props.amount)*/}
      </div>
    </div>
  );
}; 

export default ExpenseItem;