import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar';
import { getCurrentUser } from './redux/user/user-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() => import('./Views/HomeView'));
const LoginView = lazy(() => import('./Views/LoginView'));
const RegisterView = lazy(() => import('./Views/RegisterView'));
const ContactsView = lazy(() => import('./Views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            component={RegisterView}
            restricted
            redirectTo="/"
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo="/"
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
