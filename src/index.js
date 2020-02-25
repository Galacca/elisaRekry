import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp();
store.subscribe(renderApp);
