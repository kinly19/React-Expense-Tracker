import './Chart.scss';

import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {

    //go through all the months from ExpensesChart.js and find the biggest value across all months and show that value
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value); //change datapoint object from (ExpensesChart.js)to just a number we can use
    const totalMax = Math.max(...dataPointValues); //spread operator to pull out all the array elements and add them as standalone arguments to this max method.

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;