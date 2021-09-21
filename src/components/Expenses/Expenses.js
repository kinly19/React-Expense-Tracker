import { useState } from 'react';
import './Expenses.scss'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({items}) => { //destructuring props

  const [filteredYear, setFilteredYear] = useState('2020'); 

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
        {items.map((expenses) => (
          <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses