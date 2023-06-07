import React from 'react';
import css from '../ContactList/ContactList.module.css';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    dispatch(deleteContact(e));
  };

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={handleDeleteContact}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
