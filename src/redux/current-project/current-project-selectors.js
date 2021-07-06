const getCurrentProjectTitle = state => state.currentProject.title;
const getCurrentProjectDescription = state => state.currentProject.description;
const getCurrentProjectTeam = state => state.currentProject.team;

const currentProjectSelectors = {
  getCurrentProjectTitle,
  getCurrentProjectDescription,
  getCurrentProjectTeam,
};

export default currentProjectSelectors;
