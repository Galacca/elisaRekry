import React from 'react';
import { connect } from 'react-redux';
import './Find.css';

// Simple function to seperate the date (which is already visible in the UI form fields) and the time of the program.
// Return only the time
const stripDateInfo = (startTime) => {
  const strippedStartTime = startTime.split(' ');
  return (strippedStartTime[1]);
};

const FindResult = (props) => {
  // Simple if statement to stop react from crashing if no search has been made yet.
  if (props.find === []) return null;
  return (
    <div>
      {props.find.map((r) => (
        <div className="FindChild" key={r.id}>
          {r.name}
          {' '}
          {stripDateInfo(r.startTime)}
          {' '}
          -
          {' '}
          {stripDateInfo(r.endTime)}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  find: state.find,
});

const connectedFindResult = connect(mapStateToProps)(FindResult);
export default connectedFindResult;
