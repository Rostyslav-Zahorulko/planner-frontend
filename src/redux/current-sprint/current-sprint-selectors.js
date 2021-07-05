const getCurrentSprintTitle = state => state.currentSprint.title;
const getCurrentSprintDuration = state => state.currentSprint.duration;
const getCurrentSprintStartDate = state => state.currentSprint.startDate;
const getCurrentSprintDisplayedDate = state =>
  state.currentSprint.displayedDate;

const currentSprintSelectors = {
  getCurrentSprintTitle,
  getCurrentSprintDuration,
  getCurrentSprintStartDate,
  getCurrentSprintDisplayedDate,
};

export default currentSprintSelectors;
