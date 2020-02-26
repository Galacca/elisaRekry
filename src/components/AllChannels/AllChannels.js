import React from 'react';
import { connect } from 'react-redux';
import './AllChannels.css';

const AllChannels = (props) => (
    <div className="Parent">
    {props.allChannels.map(s => <div className="Child" key={s.id}>{s.name}<br /><br />{s.description}</div>)}
    </div>
)

const mapStateToProps = (state) => ({
    allChannels: state.allChannels,
});
  
const connectedAllChannels = connect(mapStateToProps)(AllChannels);
export default connectedAllChannels;
