import { addFilter } from './contactsActions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contactsOperations';

const isLoadingReducer = createReducer(false, {
  [addContactThunk.pending]: () => true,
  [addContactThunk.fulfilled]: () => false,
  [addContactThunk.rejected]: () => false,

  [getContactsThunk.pending]: () => true,
  [getContactsThunk.fulfilled]: () => false,
  [getContactsThunk.rejected]: () => false,

  [deleteContactThunk.pending]: () => true,
  [deleteContactThunk.fulfilled]: () => false,
  [deleteContactThunk.rejected]: () => false,
});

const itemsReducer = createReducer([], {
  [addContactThunk.fulfilled]: (state, { payload }) => [...state, payload],
  [getContactsThunk.fulfilled]: (_, { payload }) => payload,
  [deleteContactThunk.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const setError = (_, { payload }) => payload;

const errorReducer = createReducer(null, {
  [addContactThunk.rejected]: setError,
  [addContactThunk.pending]: () => null,

  [getContactsThunk.rejected]: setError,
  [getContactsThunk.pending]: () => null,

  [deleteContactThunk.rejected]: setError,
  [deleteContactThunk.pending]: () => null,
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  filter,
});

export default contactsReducer;
