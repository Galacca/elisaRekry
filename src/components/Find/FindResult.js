import React from 'react';
import { connect } from 'react-redux';
import './Find.css'

//Simple function to seperate the date (which is already visible in the UI form fields) and the time of the program.
//Return only the time
const stripDateInfo = (startTime) => {
    const strippedStartTime = startTime.split(' ');
    return(strippedStartTime[1])
}

const FindResult = (props) => {
    //Simple if statement to stop react from crashing if no search has been made yet.
    if(props.find === []) return null
    return <div className = 'Parent'>{props.find.map(r => r.map(ra => <div className="Child" key={ra.id}>{ra.name} {stripDateInfo(ra.startTime)} - {stripDateInfo(ra.endTime)}</div>))}</div>
}

const mapStateToProps = (state) => ({
    find: state.find,
});

const connectedFindResult = connect(mapStateToProps)(FindResult);
export default connectedFindResult;