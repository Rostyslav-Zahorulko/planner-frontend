const getTasks = state => state.tasks.items;
const getFilter = state => state.tasks.filter;
const getVisibleTasks = state => {
  const items = getTasks(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ title }) =>
    title.toLowerCase().includes(normalizedFilter),
  );
};

const taskSelectors = {
  getTasks,
  getFilter,
  getVisibleTasks,
};

export default taskSelectors;
