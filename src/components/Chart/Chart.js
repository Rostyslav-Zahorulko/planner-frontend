import { Line } from 'react-chartjs-2';

const Chart = ({ onChartData }) => {
  return (
    <div className="chart">
      <Line data={onChartData} options={{}} />
    </div>
  );
};

export default Chart;
