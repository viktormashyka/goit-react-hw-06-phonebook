import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { Button } from './ContactsForm.styled';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    for (const contact of contacts) {
      if (contact.name === name) {
        toast.info('This contact exist in your list');
        return;
      }
    }
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Name
        <br />
        <input
          type="text"
          name="name"
          // value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="">
        Number
        <br />
        <input
          type="tel"
          name="number"
          // value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // onChange={handleChange}
        />
      </label>
      <br />
      <Button type="submit">Add contact</Button>
    </form>
  );
};

// import { useState } from 'react';
// import PropTypes from 'prop-types';

// import { Button } from './ContactsForm.styled';

// export const ContactForm = ({ onSubmit }) => {
//   const [inputValues, setInputValues] = useState({ name: '', number: '' });

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     setInputValues({ ...inputValues, [name]: value });
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     onSubmit({ ...inputValues });

//     setInputValues({ name: '', number: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="" style={{ marginLeft: 30, fontSize: 24 }}>
//         Name
//         <br />
//         <input
//           type="text"
//           name="name"
//           value={inputValues.name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleChange}
//           style={{ marginLeft: 30, fontSize: 24 }}
//         />
//       </label>
//       <br />
//       <label htmlFor="" style={{ marginLeft: 30, fontSize: 24 }}>
//         Number
//         <br />
//         <input
//           type="tel"
//           name="number"
//           value={inputValues.number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={handleChange}
//           style={{ marginLeft: 30, fontSize: 24 }}
//         />
//       </label>
//       <br />
//       <Button type="submit">Add contact</Button>
//     </form>
//   );
// };

// ContactForm.propTypes = {
//   inputValues: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     onSubmit: PropTypes.func.isRequired,
//   }).isRequired,
// };