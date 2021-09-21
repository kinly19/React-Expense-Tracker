import './ExpenseFilter.scss';

const ExpenseFilter = ({onFilterChange, defaultYear}) => {

    const dropDownHandler = (event) => { //pass data up from child to parent element through a function
        onFilterChange(event.target.value); //calling function from parent component, passing data as argument
    };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value = {defaultYear}onChange={dropDownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;