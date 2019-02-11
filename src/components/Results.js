import React from 'react';

// Components
import Rep from './Representative';

const Results = (props) => {
  const {results} = props.location.state.state;
  console.log(results);
  return (
    <div className="results">
      {results.map((rep, i) => {
        return <Rep key={i} data={rep}/>
      })}
    </div>
  );
};

export default Results;