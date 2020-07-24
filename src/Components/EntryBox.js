import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/EntryBox.css';

const EntryBox = props => {
  const { result, index, handleSetResult } = props;
  const [value, setValue] = useState(result);

  const handleChange = event => {
    const possible = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/'];
    if (possible.includes(event.target.value)) {
      setValue(event.target.value);
      handleSetResult(event.target.value, index);
    } else {
      // eslint-disable-next-line no-alert
      alert('Please, type a number, "." or "/"');
      setValue('');
    }
  };

  return (
    <label htmlFor="EntryBox">
      <input
        className="EntryBox"
        type="text"
        id="EntryBox"
        name="EntryBox"
        value={value}
        maxLength={1}
        onChange={handleChange}
      />
    </label>
  );
};

EntryBox.propTypes = {
  result: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  index: PropTypes.number.isRequired,
  handleSetResult: PropTypes.func.isRequired,
};

EntryBox.defaultProps = {
  result: null,
};

export default EntryBox;
