import React from 'react';
import { connect } from 'react-redux';

//Simple function to seperate the date (which is already visible in the UI form fields) and the time of the program.
//Return only the time
const stripDateInfo = (startTime) => {
    const strippedStartTime = startTime.split(' ');
    return(strippedStartTime[1])
}

const FindResult = (props) => {
    //Simple if statement to stop react from crashing if no search has been made yet.
    if(props.find === []) return null
    return props.find.map(r => r.programs.map(p => <div key={p.id}>{p.name} {stripDateInfo(p.startTime)}</div>))
}

const mapStateToProps = (state) => ({
    find: state.find,
});

const connectedFindResult = connect(mapStateToProps)(FindResult);
export default connectedFindResult;