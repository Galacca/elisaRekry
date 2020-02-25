import React from 'react';
import { connect } from 'react-redux';


const CurrentlyLive = (props) => {
return props.livePrograms.map(s => <li key={s.channel.id}>{s.channel.name} | {s.programs.map(p => p.name)}</li>)
}

const mapStateToProps = (state) => ({
    livePrograms: state.livePrograms
});
  
const connectedCurrentlyLive = connect(mapStateToProps)(CurrentlyLive);
export default connectedCurrentlyLive;
