const getIsLoggedIn = state => state.auth.isLoggedIn;
const getEmail = state => state.auth.user.email;
//const getUserEmail = state => state.auth.users//
const authSelectors = {
  getIsLoggedIn,
  getEmail,
  // getUserEmail,
};

export default authSelectors;
