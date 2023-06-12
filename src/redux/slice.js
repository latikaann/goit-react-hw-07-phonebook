import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { contactsApi } from 'contactsApi/contactsApi';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.push({ ...action.payload });
  //   },
  //   deleteContact: (state, action) => {
  //     return state.filter(contact => contact.id !== action.payload);
  //   },
  // },
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

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
