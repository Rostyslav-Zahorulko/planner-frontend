const getIsLoggedIn = state => state.auth.isLoggedIn;
const getEmail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getEmail,
};

export default authSelectors;
