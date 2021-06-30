const getCurrentSprintTitle = state => state.currentSprint.title;
const getCurrentSprintDuration = state => state.currentSprint.duration;

const currentSprintSelectors = {
  getCurrentSprintTitle,
  getCurrentSprintDuration,
};

export default currentSprintSelectors;
