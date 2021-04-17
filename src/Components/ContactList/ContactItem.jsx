import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/contact-operations';
import st from './ContactListItem.module.css';


const ContactItem = ({ contact }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={st.listItem}>
      <p className={st.name}>{contact.name}</p>
      <p className={st.number}>{contact.number}</p>

      <button className={st.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
export default ContactItem;
