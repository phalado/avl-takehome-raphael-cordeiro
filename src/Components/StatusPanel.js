import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/StatusPanel.css';

const StatusPanel = props => {
  const { numProbs, correctProbs } = props;

  return (
    <aside className="statusPanel">
      <div>
        <h3>ACCURACY</h3>
        <p>
          {(100 * correctProbs) / numProbs}
          %
        </p>
      </div>
      <div>
        <h3>COMPLETED</h3>
        <p>{numProbs}</p>
        <p>PROBLEMS</p>
      </div>
      <div>
        <h3>CORRECT</h3>
        <p>{correctProbs}</p>
        <p>PROBLEMS</p>
      </div>
    </aside>
  );
};

StatusPanel.propTypes = {
  numProbs: PropTypes.number.isRequired,
  correctProbs: PropTypes.number.isRequired,
};

export default StatusPanel;
