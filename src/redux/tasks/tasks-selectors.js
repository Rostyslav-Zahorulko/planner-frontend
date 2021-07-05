export const getTasks = state => state.tasks.items;

export const getFilter = state => state.tasks.filter;

export const getVisibleTasks = state => {
  const items = getTasks(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ title }) =>
    title.toLowerCase().includes(normalizedFilter),
  );
};
