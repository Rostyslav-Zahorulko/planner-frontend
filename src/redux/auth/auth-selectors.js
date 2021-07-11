const getEmail = state => state.auth.user.email;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshed = state => state.auth.isRefreshed;
const getToken = state => state.auth.token;

const authSelectors = {
  getEmail,
  getIsLoggedIn,
  getIsRefreshed,
  getToken,
};

export default authSelectors;
