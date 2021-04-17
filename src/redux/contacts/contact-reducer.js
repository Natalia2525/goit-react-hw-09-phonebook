
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchAddContactSuccess,
  changeFilter,
  fetchContactsSuccess,
  fetchDeleteContactSuccess,
} from './contact-actions';

const initialState = {
  items: [],
};

const items = createReducer(initialState.items, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [fetchAddContactSuccess]: (state, { payload }) => [...state, payload],
  [fetchDeleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const loading = createReducer(false, {
//   [fetchAddContactRequest]: true,
//   [fetchAddContactSuccess]: false,
//   [fetchAddContactError]: false,
// });

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
