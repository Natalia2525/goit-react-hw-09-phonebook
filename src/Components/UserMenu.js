import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../redux/user/user-selectors';
import { logOut } from '../redux/user/user-operations';
import st from './PhonebookForm/PhonebookForm.module.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'black'
  },
  button: {
    padding: '5px 40px',
    backgroundColor: 'rgb(184, 92, 80)',
    border: 'none',
    borderRadius: 5,
    boxShadow: '0px 0px 3px 0px black',
    cursor: 'pointer',
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  return (
    <div style={styles.container}>
      <span style={styles.name}>{email} </span>
      <button
        style={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Выйти
      </button>
    </div>
  );
};
export default UserMenu;
