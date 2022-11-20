import React from 'react';
import PropTypes from 'prop-types';

export const FilterBox = ({ value, onChange }) => {
  return (
    <label htmlFor="" style={{ marginLeft: 30, fontSize: 24 }}>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filterContacts"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        style={{ marginLeft: 30, fontSize: 24 }}
      />
    </label>
  );
};

FilterBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
