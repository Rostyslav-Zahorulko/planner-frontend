const getCurrentProjectTitle = state => state.currentProject.title;
const getCurrentProjectDescription = state => state.currentProject.description;

const currentProjectSelectors = {
  getCurrentProjectTitle,
  getCurrentProjectDescription,
};

export default currentProjectSelectors;
