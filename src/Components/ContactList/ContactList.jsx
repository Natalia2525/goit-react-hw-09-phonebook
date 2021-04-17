import ContactItem from './ContactItem';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contact-operations';
import st from './ContactListItem.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={st.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ).isRequired,
// };

export default ContactList;
