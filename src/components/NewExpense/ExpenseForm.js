import { useState } from 'react';
import './ExpenseForm.scss';

const ExpenseForm = ({onSaveExpenseData, onCancel}) => {

    //multiple state approach 
    const [inputTitle,setInputTitle] = useState ('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    //single state approach 
    // const [userInput, setUserInput] = useState({
    //     inputTitle: '',
    //     inputAmount:'',
    //     inputDate:''
    // });

    const titleChangeHandler = (e) => {
      //when using a single state approach with multiple values, we set the value we want to update
      //but we also need to copy the other values which we are not updating.
      //code below will work, but... the practice is not the best and we could(most likly)be using an outdated state(stale state)
      // setUserInput({
      //     ...userInput,
      //     inputTitle:e.target.value
      // });

      //safer way from the above when the state change depends on its own previous value!, react will make sure the state it gives us will always be the latest state. (updater function)
      // setUserInput((prevState) => {
      //     return {...prevState, inputTitle: e.target.value}
      // });

      setInputTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
      setInputAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
      setInputDate(e.target.value);
    };
    
    const submitHandler = (event) => {
      event.preventDefault(); //stops the default action from running(stops page from refreshing)

      const expenseData = {
        //taking the entered data from form and doing something with it
        title: inputTitle,
        amount: inputAmount,
        date: new Date(inputDate),
      };

      onSaveExpenseData(expenseData) //or props.onSaveExpenseData
      setInputTitle("");
      setInputAmount("");
      setInputDate("");
      onCancel(false);
    };

    const cancelFormHandler = (event) => {
      event.preventDefault();
      onCancel(false);
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            required
            value={inputTitle} 
            onChange={titleChangeHandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            required
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            required
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={cancelFormHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm; 

