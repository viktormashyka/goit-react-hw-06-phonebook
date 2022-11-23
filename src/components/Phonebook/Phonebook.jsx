import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from '../ContactsForm/ContactsForm';
import { FilterBox } from '../ContactsFilter/ContactsFilter';
import { ContactListBox } from '../ContactsList/ContactsList';

export const Phonebook = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
      </div>
      <div>
        <FilterBox />
        <ContactListBox />
      </div>
      <ToastContainer />
    </div>
  );
};
