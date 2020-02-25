import React from 'react';
import { connect } from 'react-redux';


const AllChannels = (props) => {
return props.allChannels.map(s => <li key={s.id}>{s.name} | {s.description}</li>)
}

const mapStateToProps = (state) => ({
    allChannels: state.allChannels,
});
  
const connectedAllChannels = connect(mapStateToProps)(AllChannels);
export default connectedAllChannels;
