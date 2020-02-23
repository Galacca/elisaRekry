import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getLiveProgramsAction from './actions/liveProgramActions';
import MainView from './view/MainView';
import Navbar from './components/Navbar/Navbar';

const App = (props) => {
  useEffect(() => {
    props.getLiveProgramsAction();
  }, []);

  return (
    <div>
      <Navbar/>
      <MainView />
    </div>
  );
};

export default connect(null, { getLiveProgramsAction })(App);
