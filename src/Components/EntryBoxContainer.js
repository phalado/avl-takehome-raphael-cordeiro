import React from 'react';
import PropTypes from 'prop-types';
import EntryBox from './EntryBox';
import '../Styles/EntryBox.css';

const EntryBoxContainer = props => {
  const { result, handleSetResult } = props;

  return (
    <form className="form">
      <EntryBox result={result[0]} index={0} handleSetResult={handleSetResult} />
      <EntryBox result={result[1]} index={1} handleSetResult={handleSetResult} />
      <EntryBox result={result[2]} index={2} handleSetResult={handleSetResult} />
      <EntryBox result={result[3]} index={3} handleSetResult={handleSetResult} />
      <button className="button" type="submit" onClick={null}>Press Enter</button>
    </form>
  );
};

EntryBoxContainer.propTypes = {
  result: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleSetResult: PropTypes.func.isRequired,
};

export default EntryBoxContainer;
