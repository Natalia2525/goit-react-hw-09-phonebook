import PhonebookForm from '../Components/PhonebookForm';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';
import st from '../Components/ContactList/ContactListItem.module.css';

const ContactsView = () => {
  return (
    <div className={st.container}>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;
