import React, { useState } from 'react';
import css from '../ContactForm/ContactForm.module.css';
import { nanoid } from 'nanoid';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'contactsApi/contactsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (!name || !phone) {
    //   return;
    // }

    const newContact = {
      id: nanoid(6),
      name,
      phone,
    };

    if (contacts.find(item => item.name === newContact.name)) {
      toast.error(`${newContact.name} is already in contacts.`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      // alert(`${newContact.name} is already in contacts.`);
      return;
    }

    addContact(newContact);
    toast.success('Contact added to the phonebook!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <div className={css.formBox}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
            placeholder="Jacob Mercer"
          />
        </label>
        <label>
          Mobile
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={phone}
            placeholder="Phone number"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
