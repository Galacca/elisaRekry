import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import getLiveProgramsAction from './actions/liveProgramActions';
import getAllChannelsAction from './actions/channelActions';
import Navbar from './components/Navbar/Navbar';
import AllChannels from './components/AllChannels/AllChannels';
import CurrentlyLive from './components/CurrentlyLive/CurrentlyLive';
import Find from './components/Find/Find';

const App = (props) => {
  useEffect(() => {
    props.getLiveProgramsAction();
    props.getAllChannelsAction();
  }, []);

  // Check the store if the loading for requested path is complete
  let location = props.location.pathname.substr(1);
  if (location === '') location = 'Currently live';
  if (!props.loadingState[location]) {
    return (
      <div>
        <Navbar />
        Loading...
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CurrentlyLive} />
        <Route path="/All channels" component={AllChannels} />
        <Route path="/Find" component={Find} />
        <Route path="/Currently live" component={CurrentlyLive} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loadingState: state.loadingState,
});

export default connect(mapStateToProps, { getLiveProgramsAction, getAllChannelsAction })(withRouter(App));
