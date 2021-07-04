const getCurrentProjectTitle = state => state.currentProject.title;
const getCurrentProjectDescription = state => state.currentProject.description;
const getCurrentProjectSprints = state => state.currentProject.sprints;

const currentProjectSelectors = {
  getCurrentProjectTitle,
  getCurrentProjectDescription,
  getCurrentProjectSprints,
};

export default currentProjectSelectors;
