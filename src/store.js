import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import liveProgramReducer from './reducers/programReducer';
import loadingStateReducer from './reducers/loadingStateReducer'
import channelReducer from './reducers/channelReducer'
import findReducer from './reducers/findReducer'

const reducer = combineReducers({
  livePrograms: liveProgramReducer,
  loadingState: loadingStateReducer,
  allChannels: channelReducer,
  find: findReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
