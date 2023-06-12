import React from 'react';
import css from '../ContactList/ContactList.module.css';
import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../contactsApi/contactsApi';
import Spinner from 'components/Spinner/Spinner';

const ContactList = () => {
  const { data, isError, isFetching } = useFetchContactsQuery();

  const contacts = data || [];

  const filter = useSelector(state => state.filter);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  if (isError) {
    return <div>Error loading contacts.</div>;
  }

  return (
    <div>
      {isFetching ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ContactList;
