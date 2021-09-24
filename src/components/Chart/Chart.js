import './Chart.scss';

import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={null}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;