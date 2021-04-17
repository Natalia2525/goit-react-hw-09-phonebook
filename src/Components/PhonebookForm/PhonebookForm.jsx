import { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import st from './PhonebookForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contact-operations';

const PhonebookForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert('Please еnter data!');
      setName('');
      setNumber('');
      return false;
    }
    const filterContact = contacts.find(contact => contact.name === name);
    if (!filterContact) {
      dispatch(addContact(name, number));
    } else {
      alert('The entered data exists!');
    }
    setName('');
    setNumber('');
  };

  return (
    <form className={st.form} onSubmit={handleSubmit}>
      <label className={st.title}>
        Name
        <input
          ref={inputRef}
          className={st.input}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Number
        <input
          className={st.input}
          type="text"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={st.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

// PhonebookForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onCheckUniq: PropTypes.func.isRequired,
// };

export default PhonebookForm;
