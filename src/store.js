import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import liveProgramReducer from './reducers/programReducer';
import viewReducer from './reducers/viewReducer';

const reducer = combineReducers({
  livePrograms: liveProgramReducer,
  currentView: viewReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
