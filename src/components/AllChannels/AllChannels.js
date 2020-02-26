import React from 'react';
import { connect } from 'react-redux';
import './AllChannels.css';

const AllChannels = (props) => (
  props.allChannels.map((s) => (
    <div className="AllChannelsChild" key={s.id}>
      {s.name}
      <br />
      <br />
      {s.description}
    </div>
  ))
);

const mapStateToProps = (state) => ({
  allChannels: state.allChannels,
});

const connectedAllChannels = connect(mapStateToProps)(AllChannels);
export default connectedAllChannels;
