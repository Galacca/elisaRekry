import React from 'react';
import { connect } from 'react-redux';
import CurrentlyLive from '../components/CurrentlyLive/CurrentlyLive'
import AllChannels from '../components/AllChannels/AllChannels'
import SpecificDay from '../components/SpecificDay/SpecificDay'
import { Route, Switch } from 'react-router-dom';

const MainView = (props) => {
   return (
   <div>
      <Switch>
       <Route exact path='/' component={CurrentlyLive}></Route>
       <Route path='/allchannels' component={AllChannels}></Route>
       <Route path='/specificday' component={SpecificDay}></Route>
       <Route path='/currentlylive' component={CurrentlyLive}></Route>
      </Switch>
   </div>
  );
};

const mapStateToProps = (state) => ({
  currentView: state.currentView,
});

const connectedMainView = connect(mapStateToProps)(MainView);

export default connectedMainView;
