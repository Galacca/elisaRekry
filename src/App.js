import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getLiveProgramsAction from './actions/liveProgramActions';
import MainView from './view/MainView';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

const App = (props) => {
  useEffect(() => {
    props.getLiveProgramsAction();
  }, []);

  return (
    <div>
      <Router>
      <Navbar/>
      <MainView />
      </Router>
    </div>
  );
};

export default connect(null, { getLiveProgramsAction })(App);
