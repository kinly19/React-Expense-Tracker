import { useState } from 'react';
import './Expenses.scss'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({items}) => { //destructuring props

  const [filteredYear, setFilteredYear] = useState('2020'); 
  const filteredExpenses = items.filter(expenses => expenses.date.getFullYear().toString() === filteredYear);//filtered data from app.js
  
  const filterChangeHandler = (seletedYear) => { //passing data from child to parent
    setFilteredYear(seletedYear); //storing data from function to state
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}

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