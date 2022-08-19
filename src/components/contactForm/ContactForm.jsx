import { Report } from 'notiflix/build/notiflix-report-aio';
import s from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const data = { name: name, number: number };

    if (checkRepeatContact(data)) {
      return Report.failure(`${data.name} is already in contacts.`);
    }
    dispatch(addContactThunk(data));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const checkRepeatContact = data => {
    return contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
  };

  return (
    <>
      <form className={s.addForm} onSubmit={handleSubmitForm}>
        <label className={s.formLabel}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.formLabel}>
          Number
          <input
            className={s.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </form>
      <h2 className={s.contactsForm__title}>Contacts</h2>
    </>
  );
};

export default ContactForm;
