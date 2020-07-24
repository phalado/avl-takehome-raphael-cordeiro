import React, { useState } from 'react';
import StatusPanel from './StatusPanel';
import Problems from '../Constants/Problems';
import '../Styles/App.css';
import MainPanel from './MainPanel';

const App = () => {
  const [problem] = useState(Problems.problem1);
  const [numProbs] = useState(100);
  const [correctProbs] = useState(75);
  const [result, setResult] = useState([null, null, null, null]);
  const [topic, setTopic] = useState();

  const handleSetResult = (value, index) => {
    result[index] = value;
    setResult([...result]);
  };

  const handleChangeTopic = value => {
    setTopic(value);
  };

  return (
    <div className="App">
      <StatusPanel numProbs={numProbs} correctProbs={correctProbs} />
      <MainPanel
        problem={problem}
        result={result}
        handleSetResult={handleSetResult}
        def={topic}
        handleChangeTopic={handleChangeTopic}
      />
    </div>
  );
};

export default App;
