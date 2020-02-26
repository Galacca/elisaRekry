import React from 'react';
import { connect } from 'react-redux';
import './CurrentlyLive.css';

const CurrentlyLive = (props) => (
  props.livePrograms.map((s) => (
    <div className="CurrentlyLiveChild" key={s.channel.id}>
      {s.channel.name}
      <br />
      <br />
      {s.programs.map((p) => p.name)}
    </div>
  ))
);

const mapStateToProps = (state) => ({
  livePrograms: state.livePrograms,
});

const connectedCurrentlyLive = connect(mapStateToProps)(CurrentlyLive);
export default connectedCurrentlyLive;
