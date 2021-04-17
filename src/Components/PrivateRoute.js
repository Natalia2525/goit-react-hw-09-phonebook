import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import  {getIsAunteficated}  from '../redux/user/user-selectors';

const PrivateRoute = ({ children, redirectTo, ...routeProps }) => {
  const getIsLogin = useSelector(getIsAunteficated);
  return (
    <Route {...routeProps}>
      {getIsLogin ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};
export default PrivateRoute;
