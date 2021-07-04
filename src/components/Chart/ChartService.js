import axios from 'axios';
import { useState, useEffect } from 'react';
import Chart from './Chart';
const ChartService = () => {
  const [chartData, setChartData] = useState({});

  // const [incomingData, setIncomingData] = useState([]);
  // const [incomingHours, setIncomingHours] = useState([]);
  // const [plannedHours, setPlannedHours] = useState([]);

  const handleGetData = () => {
    const days = [];
    const incomingHours = [];
    const plannedHours = [];
    axios
      .get('')
      .then(res => {
        console.log(res.data.sprints);

        // for (const dataObj of res.data.sprints) {
        //   days.push(parseInt(dataObj.tasks));
        //   incomingHours.push(parseInt(dataObj.plannedHours));
        //   plannedHours.push(parseInt(dataObj.plannedHours));
        // }
      })
      .catch(err => {
        console.log(err);
      });

    console.log(days, incomingHours, plannedHours);
    setChartData({
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // days
      datasets: [
        {
          label: 'incomingHours',
          data: [12, 19, 3, 5, 2, 3], //incomingHours
          backgroundColor: ['rgb(247, 0, 0)'],
          borderColor: ['rgb(247, 0, 0)'],
          borderWidth: 3,
        },
        {
          label: ' plannedHours',
          data: [54, 25, 43, 53, 24, 43],
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
