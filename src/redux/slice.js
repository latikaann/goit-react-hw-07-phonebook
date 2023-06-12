import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { contactsApi } from 'contactsApi/contactsApi';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.push({ ...action.payload });
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
