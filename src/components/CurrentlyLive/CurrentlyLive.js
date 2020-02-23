import React from 'react';
import { connect } from 'react-redux';


const CurrentlyLive = (props) => {
    if (!props) return <div>Loading...</div>
    return <div>MW Currently live:</div>
}

const mapStateToProps = (state) => ({
    livePrograms: state.livePrograms
});
  
const connectedCurrentlyLive = connect(mapStateToProps)(CurrentlyLive);
export default connectedCurrentlyLive;
