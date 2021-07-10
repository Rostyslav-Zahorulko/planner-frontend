import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import Chart from '../Chart';

import { currentSprintSelectors } from '../../redux/current-sprint';
import { tasksSelectors } from '../../redux/tasks';

dayjs.extend(customParseFormat);

const { getCurrentSprintStartDate, getCurrentSprintDuration } =
  currentSprintSelectors;

const ChartService = () => {
  const sprintStartDate = useSelector(getCurrentSprintStartDate);
  const sprintDuration = useSelector(getCurrentSprintDuration);
  const allTasks = useSelector(tasksSelectors.getTasks);

  // ======== CHART LOGIC ========
  // console.log(allTasks);
  const totalPlannedHours = allTasks.reduce(
    (totalPlannedHours, task) => totalPlannedHours + task.plannedHours,
    0,
  );
  const leg = totalPlannedHours / sprintDuration;

  // Array for red chart line
  const plannedHoursLeftPerDay = new Array(sprintDuration + 1)
    .fill(0)
    .reduce((acc, _, ind) => {
      const value = Math.ceil(totalPlannedHours - leg * ind);
      acc.push(value);
      return acc;
    }, []);
  // console.log(plannedHoursLeftPerDay);

  const totalSpentHoursPerDay = new Array(sprintDuration)
    .fill(0)
    .reduce((acc, _, ind) => {
      const HoursPerDayObjectsByDay = allTasks.map(
        task => task.hoursPerDay[ind],
      );

      const totalHoursSpentForAllTasksToday = HoursPerDayObjectsByDay.reduce(
        (total, obj) => total + obj.hoursSpent,
        0,
      );
      acc.push(totalHoursSpentForAllTasksToday);
      return acc;
    }, []);

  // Array for blue chart line
  const factHoursLeftByPerDay = new Array(sprintDuration + 1)
    .fill(0)
    .reduce((acc, _, ind) => {
      let value = 0;
      const i = ind - 1;

      if (acc.length > 0) {
        const number = acc.length - 1;
        // console.log(number);
        const previousHoursLeft = acc[number];
        value = Math.ceil(previousHoursLeft - totalSpentHoursPerDay[i]);
        ind !== 0 && acc.push(value);

        return acc;
      }
      ind === 0 && acc.push(totalPlannedHours);

      return acc;
    }, []);
  // console.log(factHoursLeftByPerDay);

  // DatesArray for chart
  const array = new Array(sprintDuration).fill('');
  const sprintDates = array.map((item, ind) => {
    const date = dayjs(sprintStartDate).add(ind, 'day').format('DD MMM');
    return date;
  });
  const dayBeforeStart = dayjs(sprintDates[0], 'DD MMM')
    .subtract(1, 'day')
    .format('DD MMM');
  sprintDates.unshift(dayBeforeStart);
  // console.log(sprintDates);

  // ======== END OF CHART LOGIC ========

  const [chartData, setChartData] = useState({});

  const handleGetData = () => {
    setChartData({
      labels: sprintDates, // days
      datasets: [
        {
          label: 'Remaining planned working hours',
          data: plannedHoursLeftPerDay, //remainingHours
          backgroundColor: ['rgb(247, 0, 0)'],
          borderColor: ['rgb(247, 0, 0)'],
          borderWidth: 3,
        },
        {
          label: 'Actual working hours',
          data: factHoursLeftByPerDay,
          backgroundColor: ['rgb(33, 17, 255)'], //plannedHours
          borderColor: ['rgb(33, 17, 255)'],
          borderWidth: 3,
        },
      ],
    });
  };

  // const handleGetData = useCallback(() => {
  //   setChartData({
  //     labels: sprintDates, // days
  //     datasets: [
  //       {
  //         label: 'Remaining planned working hours',
  //         data: plannedHoursLeftPerDay, //remainingHours
  //         backgroundColor: ['rgb(247, 0, 0)'],
  //         borderColor: ['rgb(247, 0, 0)'],
  //         borderWidth: 3,
  //       },
  //       {
  //         label: 'Actual working hours',
  //         data: factHoursLeftByPerDay,
  //         backgroundColor: ['rgb(33, 17, 255)'], //plannedHours
  //         borderColor: ['rgb(33, 17, 255)'],
  //         borderWidth: 3,
  //       },
  //     ],
  //   });
  // }, [sprintDates, plannedHoursLeftPerDay, factHoursLeftByPerDay]);

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
