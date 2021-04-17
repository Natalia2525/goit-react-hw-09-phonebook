import axios from 'axios';

import {
  fetchAddContactError,
  fetchAddContactSuccess,
  fetchAddContactRequest,
  fetchContactsRequest,
  fetchContactsError,
  fetchContactsSuccess,
  fetchDeleteContactRequest,
  fetchDeleteContactSuccess,
  fetchDeleteContactError,
} from './contact-actions';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get(`/contacts`)
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(fetchAddContactRequest());
  axios
    .post(`/contacts`, contact)
    .then(({ data }) => dispatch(fetchAddContactSuccess(data)))
    .catch(error => dispatch(fetchAddContactError(error.message)));
};

export const deleteContact = id => async dispatch => {
  dispatch(fetchDeleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(fetchDeleteContactSuccess(id));
  } catch (error) {
    dispatch(fetchDeleteContactError(error.message));
  }
};
