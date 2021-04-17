import { NavLink } from 'react-router-dom';
import { getIsAunteficated } from '../redux/user/user-selectors';
import {  useSelector } from 'react-redux';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const isLogined = useSelector(getIsAunteficated);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Главная
      </NavLink>
      {isLogined && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
