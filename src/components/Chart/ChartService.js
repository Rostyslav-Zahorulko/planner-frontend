import axios from 'axios';
import { useState, useEffect } from 'react';
import Chart from './Chart';

const ChartService = () => {
  const [chartData, setChartData] = useState({});

  const [days, setDays] = useState([
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Purple',
    'Orange',
  ]);
  const [remainingHours, setКemainingHours] = useState([12, 19, 3, 5, 2, 3]);
  const [plannedHours, setPlannedHours] = useState([54, 25, 43, 53, 24, 43]);

  const handleGetData = () => {
    setChartData({
      labels: days, // days
      datasets: [
        {
          label: 'remainingHours',
          data: remainingHours, //remainingHours
          backgroundColor: ['rgb(247, 0, 0)'],
          borderColor: ['rgb(247, 0, 0)'],
          borderWidth: 3,
        },
        {
          label: 'plannedHours',
          data: plannedHours,
          backgroundColor: ['rgb(33, 17, 255)'], //plannedHours
          borderColor: ['rgb(33, 17, 255)'],
          borderWidth: 3,
        },
      ],
    });
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <>
      <Chart onChartData={chartData} />
    </>
  );
};
export default ChartService;
