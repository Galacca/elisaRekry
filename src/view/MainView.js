import React from 'react';
import { connect } from 'react-redux';
import CurrentlyLive from '../components/CurrentlyLive/CurrentlyLive'
import AllChannels from '../components/AllChannels/AllChannels'
import SpecificDay from '../components/SpecificDay/SpecificDay'

const viewSelector = (props) => {
  if(props.currentView === 'All channels') return <AllChannels />
  else if (props.currentView === 'Specific day') return <SpecificDay />
  return <CurrentlyLive />
};

const MainView = (props) => {
   return (
   viewSelector(props)
  );
};

const mapStateToProps = (state) => ({
  currentView: state.currentView,
});

const connectedMainView = connect(mapStateToProps)(MainView);

export default connectedMainView;
