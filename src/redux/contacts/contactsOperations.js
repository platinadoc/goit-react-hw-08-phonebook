import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  getContactsApi,
} from 'services/dbApi';

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const newContact = await addContactApi(contact);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getContactsThunk = createAsyncThunk(
  'getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
