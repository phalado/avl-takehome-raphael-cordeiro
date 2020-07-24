import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/ProblemContainer.css';

const MainPanel = props => {
  const { problem } = props;

  return (
    <div className="ProblemContainer">
      <p>{problem.description}</p>
      <img className="graphic" src={problem.graphic} alt="Graphic" />
    </div>
  );
};

MainPanel.propTypes = {
  problem: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MainPanel;
