import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return [...state.filter(contact => contact.id !== action.payload)];
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
