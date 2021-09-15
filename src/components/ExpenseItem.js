import './ExpenseItem.scss'

//use either way 
// function ExpenseItem() {
//     return <h2>Expense item!</h2>
// }

const ExpenseItem = () => {
    return (
      //can only have one! root element in this statement, but can wrap inside of another opening and closing div to work around it.
      <div className="expense-item"> {/* looks like html but its actually JSX */}
        <div>Sep 15th 2021</div>
        <div className="expense-item__description">
          <h2>Car insurance</h2>
          <div className="expense-item__price">Amount</div>
        </div>
      </div>
    );
} 

export default ExpenseItem;