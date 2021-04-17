import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAunteficated } from '../redux/user/user-selectors';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo,
  ...routeProps
}) => {
  const getIsLogin = useSelector(getIsAunteficated);
  // const shouldRedirect = getIsLogin && restricted;
  return (
    <Route {...routeProps}>
      {getIsLogin && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};
export default PublicRoute;
