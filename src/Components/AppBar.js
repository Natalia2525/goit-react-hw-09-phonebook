import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsAunteficated } from '../redux/user/user-selectors';

import { makeStyles } from '@material-ui/core/styles';
import AppBar1 from '@material-ui/core/AppBar';


const useStyles = makeStyles((theme) =>({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  app: {
    backgroundColor: '#f8ab8d',
  },
}));

const AppBar = () => {
   const classes = useStyles();
  const IsAunteficated = useSelector(getIsAunteficated);
   return (
     <AppBar1 position="static" className={classes.app}>
         <header className={classes.header}>
           <Navigation />
           {IsAunteficated ? <UserMenu /> : <AuthNav />}
         </header>
     </AppBar1>
   );
}
export default AppBar;