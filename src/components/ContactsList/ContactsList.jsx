import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilterContact } from 'redux/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { Item } from './ContactsList.styled';

export const ContactListBox = () => {
  const contacts = useSelector(getContacts);

  const filterContact = useSelector(getFilterContact);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContact.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  console.log('contacts: ', contacts);
  console.log('filterContact: ', filterContact);
  console.log('visibleContacts: ', visibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} />
        </Item>
      ))}
    </ul>
  );
};
