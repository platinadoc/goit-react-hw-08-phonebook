import ContactForm from 'components/contactForm/ContactForm';
import ContactsList from 'components/contactsList/ContactsList';
import Filter from 'components/filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contactsOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
