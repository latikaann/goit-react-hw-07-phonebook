import React from 'react';
import css from '../ContactList/ContactList.module.css';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={css.contactsItem}>
      <span>{name}: </span>
      <span>{number}</span>

      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
