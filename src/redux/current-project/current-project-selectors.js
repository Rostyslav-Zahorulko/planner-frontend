const getCurrentProjectTitle = state => state.currentProject.title;
const getCurrentProjectDescription = state => state.currentProject.description;
const getCurrentProjectId = state => state.currentProject.id;

const currentProjectSelectors = {
  getCurrentProjectTitle,
  getCurrentProjectDescription,
  getCurrentProjectId,
};

export default currentProjectSelectors;
