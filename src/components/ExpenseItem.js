import './ExpenseItem.scss'

//use either way 
// function ExpenseItem() {
//     return <h2>Expense item!</h2>
// }

const ExpenseItem = ({ date, title, amount }) => {
  //destructuring props.

  //take these const below and move them into App.js and pass the data from App.js to here via props
  // const expenseDate = new Date (2021, 9, 15);
  // const expenseTitle = 'Car insurance';
  // const expenseAmount = '294.50';

  return (
    //can only have one! root element in this statement, but can wrap inside of another opening and closing div to work around it.
    <div className="expense-item">
      <div>
          <div>{date.getFullYear()}</div>
          <div>{date.toLocaleString('en',{month:'long'})}</div>
          <div>{date.toLocaleString('en',{day:'2-digit'})}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{amount}</div>
        {/* without destructuring (props.amount)*/}
      </div>
    </div>
  );
}; 

export default ExpenseItem;