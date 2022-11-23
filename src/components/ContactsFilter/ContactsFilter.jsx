import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filterContactSlice';

export const FilterBox = ({ value, onChange }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    const filterContact = evt.currentTarget.value;
    dispatch(changeFilter(filterContact));
    console.log('filterContact: ', filterContact);
  };

  return (
    <label htmlFor="">
      Find contacts by name
      <br />
      <input
        type="text"
        name="filterContacts"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeFilter}
      />
    </label>
  );
};
