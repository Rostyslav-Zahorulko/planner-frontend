const getCurrentProjectTitle = state => state.currentProject.title;
const getCurrentProjectDescription = state => state.currentProject.description;
const getCurrentProjectId = state => state.currentProject.id;
const getCurrentProjectTeam = state => state.currentProject.team;

const currentProjectSelectors = {
  getCurrentProjectTitle,
  getCurrentProjectDescription,
  getCurrentProjectId,
  getCurrentProjectTeam,
};

export default currentProjectSelectors;
