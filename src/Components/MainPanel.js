import React from 'react';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';
import ProblemContainer from './ProblemContainer';
import EntryBoxContainer from './EntryBoxContainer';
import '../Styles/MainPanel.css';

const MainPanel = props => {
  const {
    problem, result, handleSetResult, handleChangeTopic,
  } = props;
  const options = ['All Topics', 'Algebra', 'Geometry', 'Trigonometry', 'Arithmetic'];

  const handleChange = event => {
    handleChangeTopic(event.target.value);
  };

  return (
    <main className="MainPanel">
      <Dropdown
        options={options}
        placeholder="TOPICS"
        onChange={handleChange}
      />
      <h2>{problem.type}</h2>
      <div className="Problem">
        <ProblemContainer problem={problem} />
        <EntryBoxContainer result={result} handleSetResult={handleSetResult} />
      </div>
    </main>
  );
};

MainPanel.propTypes = {
  problem: PropTypes.objectOf(PropTypes.any).isRequired,
  result: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleSetResult: PropTypes.func.isRequired,
  handleChangeTopic: PropTypes.func.isRequired,
};

export default MainPanel;
