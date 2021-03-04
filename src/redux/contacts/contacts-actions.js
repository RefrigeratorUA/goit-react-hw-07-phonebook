import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contact/Add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/Delete');

const filterContacts = createAction('contact/ChangeFilter');

// eslint-disable-next-line
export default { addContact, deleteContact, filterContacts };
