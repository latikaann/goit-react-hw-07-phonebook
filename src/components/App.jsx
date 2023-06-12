import { ToastContainer } from 'react-toastify';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div className={css.formContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
