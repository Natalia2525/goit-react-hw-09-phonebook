import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
    ),
);

// export const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
//   );
// };
