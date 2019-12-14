import { combineReducers } from 'redux';

import appReducer from './app/reducer';

const rootReducer = combineReducers({
  appReducer: appReducer,
});

export default rootReducer;
