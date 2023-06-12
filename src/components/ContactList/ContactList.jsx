import React from 'react';
import css from '../ContactList/ContactList.module.css';
import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../contactsApi/contactsApi';

const ContactList = () => {
  const { data } = useGetContactsQuery();

  const contacts = data || [];

  const filter = useSelector(state => state.filter);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <div>
      {filteredContacts.length === 0 ? (
        <h2 className={css.titleNotFound}>Contacts not found :(</h2>
      ) : (
        <ul className={css.contactsList}>
          {filteredContacts.map(contact => (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              phone={contact.phone}
              id={contact.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
