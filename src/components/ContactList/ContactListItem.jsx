import React from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDeleteContactMutation } from 'contactsApi/contactsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactListItem = ({ name, phone, id }) => {
  const [deleteContact, delInfo] = useDeleteContactMutation();

  const handleDeleteContact = () => {
    deleteContact(id);
    toast.info('Contact delete', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <>
      <li className={css.contactsItem}>
        <p>{name}: </p>
        <p>{phone}</p>

        <button
          type="button"
          onClick={handleDeleteContact}
          disabled={delInfo.isLoading}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactListItem;
