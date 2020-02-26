import React from 'react';
import { connect } from 'react-redux';
import './CurrentlyLive.css'

const CurrentlyLive = (props) => (
    <div className = "Parent">
        {props.livePrograms.map(s => <div className="Child" key={s.channel.id}>{s.channel.name}<br /><br />{s.programs.map(p => p.name)}</div>)}
    </div>
)

const mapStateToProps = (state) => ({
    livePrograms: state.livePrograms
});
  
const connectedCurrentlyLive = connect(mapStateToProps)(CurrentlyLive);
export default connectedCurrentlyLive;
