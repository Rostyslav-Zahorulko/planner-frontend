const getCurrentSprintTitle = state => state.currentSprint.title;
const getCurrentSprintDuration = state => state.currentSprint.duration;
const getCurrentSprintStartDate = state => state.currentSprint.startDate;

const currentSprintSelectors = {
  getCurrentSprintTitle,
  getCurrentSprintDuration,
  getCurrentSprintStartDate,
};

export default currentSprintSelectors;
