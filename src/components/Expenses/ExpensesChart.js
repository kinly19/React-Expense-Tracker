import Chart from "../Chart/Chart"

const ExpensesChart = (props) => {

    //data objects to be used in Chart component
    const chartDataPoints = [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 0 },
      { label: "Mar", value: 0 },
      { label: "Apr", value: 0 },
      { label: "May", value: 0 },
      { label: "Jun", value: 0 },
      { label: "Jul", value: 0 },
      { label: "Aug", value: 0 },
      { label: "Sep", value: 0 },
      { label: "Oct", value: 0 },
      { label: "Nov", value: 0 },
      { label: "Dec", value: 0 },
    ];

    // we look through our filtered expenses (expenses.js) and make sure we go through all the expenses for a selected year 
    // then sum up the expenses for all the different months and we assign them here to our chartDataPoints.

    //loop through all our expenses (we get via props), have a look at every expense, get the month of that expense and then update the value of the 
    //appropriate chartsDataPoint value by the expense amount
    for(const expense of props.expenses){ //const expense = props.expenses
        const expenseMonth = expense.date.getMonth(); //starting from 0 
        chartDataPoints[expenseMonth].value += expense.amount; //use the value from getMonth() to select what index inside of chartDataPoints to use
        //And then add the expense amount, so we can increase the value of a given month by that expense amount.
    }

  return <Chart dataPoints={chartDataPoints}/>;
}; 

export default ExpensesChart;