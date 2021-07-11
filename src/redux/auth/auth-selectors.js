const getEmail = state => state.auth.user.email;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getEmail,
  getIsLoggedIn,
  getIsRefreshing,
};

export default authSelectors;
