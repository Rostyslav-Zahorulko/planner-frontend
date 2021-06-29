import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
