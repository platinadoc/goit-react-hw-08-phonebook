import { useDispatch, useSelector } from 'react-redux';
import s from './ContactsList.module.css';
import { deleteContactThunk } from '../../redux/contacts/contactsOperations';
import {
  getContacts,
  getFilter,
  getIsLoadingContacts,
} from 'redux/contacts/contactsSelectors';
import Loader from 'components/Loader';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoadingContacts);

  const getFilterSearchContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContact = id => dispatch(deleteContactThunk(id));

  const filterSearchContact = getFilterSearchContact();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={s.contactsList}>
          {filterSearchContact.map(contact => (
            <li className={s.contactsItem} key={contact.id}>
              <p className={s.contactName}>
                {contact.name}: {contact.number}
              </p>
              <button type="button" onClick={() => removeContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
