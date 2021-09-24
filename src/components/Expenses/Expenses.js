import { useState } from 'react';
import './Expenses.scss'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({items}) => { //destructuring props

  const [filteredYear, setFilteredYear] = useState('2020'); 
  const filteredExpenses = items.filter(expenses => expenses.date.getFullYear().toString() === filteredYear);//filtered data from app.js
  
  const filterChangeHandler = (seletedYear) => { //passing data from child to parent
    setFilteredYear(seletedYear); //storing data from function to state
  }

  //we can store jsx content inside of variables to be used (all of below moved into ExpenseList). 
  // let expensesContent = <p>No Expenses Found.</p>

  //use an if statement to change above variable (expensesContent) to the result of our map function
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expenses) => (
  //     <ExpenseItem
  //       key={expenses.id}
  //       title={expenses.title}
  //       amount={expenses.amount}
  //       date={expenses.date}
  //     />
  //   ));
  // } 

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        
        {/*different ways to output conditional content */} 
        {/* use a variable which holds JSX content to be displayed*/}
        {/* use an if statement to run our map function to update and change expensesContent variable*/}
        {/* this way we can still output conditional content whilst keeping our JSX lean and clean*/}
        {/* {expensesContent}  */}

        {/* using logical && operator */}
        {/* {filteredExpenses.length === 0 && <p> No Expense Found </p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expenses) => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))} */}

        {/* long ternary operator can be hard to read  */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found </p>
        ) : (
          filteredExpenses.map((expenses) => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))
        )} */}
        
        {/* {filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))} */}

        {/*Another way of filtering and maping through list*/}
        {/* {items.filter((filteredItem) => {
          return filteredItem.date.getFullYear().toString() === filteredYear
        }).map((filteredItem) => 
          <ExpenseItem 
            key={filteredItem.id}
            title={filteredItem.title}
            amount={filteredItem.amount}
            date={filteredItem.date}
          />
        )} */}

      </Card>
    </div>
  );
}

export default Expenses