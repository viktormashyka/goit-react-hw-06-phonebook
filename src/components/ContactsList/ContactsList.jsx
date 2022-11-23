import React from 'react';
import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilterContact,
  getStatusFilter,
} from 'redux/selectors';
import { statusFilters } from 'redux/constants';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { Item } from './ContactsList.styled';

export const ContactListBox = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
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

// import React from 'react';
// import PropTypes from 'prop-types';

// export const ContactListBox = ({ visibleContacts, onRemoveContact }) => {
//   return (
//     <ul>
//       {visibleContacts.map(contact => (
//         <li
//           key={contact.id}
//           style={{
//             fontSize: 24,
//             width: 500,
//             display: 'flex',
//             justifyContent: 'space-between',
//           }}
//         >
//           {contact.name}: {contact.number}
//           <button
//             type="submit"
//             onClick={() => {
//               onRemoveContact(contact.id);
//             }}
//             style={{
//               marginLeft: 30,
//               fontSize: 16,
//             }}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// ContactListBox.propTypes = {
//   visibleContacts: PropTypes.array.isRequired,
//   onRemoveContact: PropTypes.func.isRequired,
// };
