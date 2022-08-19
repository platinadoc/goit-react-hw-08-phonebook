import axios from 'axios';

export const addContactApi = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const getContactsApi = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const deleteContactApi = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
