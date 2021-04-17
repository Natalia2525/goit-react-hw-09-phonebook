// import types from './contact-types';
// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');
export const fetchAddContactRequest = createAction(
  'contacts/fetchAddContactRequest',
);
export const fetchAddContactSuccess = createAction(
  'contacts/fetchAddContactSuccess',
);
export const fetchAddContactError = createAction(
  'contacts/fetchAddContactError',
);

export const fetchDeleteContactRequest = createAction(
  'contacts/fetchDeleteContactRequest',
);
export const fetchDeleteContactSuccess = createAction(
  'contacts/fetchDeleteContactSuccess',
);
export const fetchDeleteContactError = createAction(
  'contacts/fetchDeleteContactError',
);
export const changeFilter = createAction('contacts/changeFilter');
