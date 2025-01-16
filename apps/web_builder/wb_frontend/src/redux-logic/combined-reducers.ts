import { combineReducers } from 'redux';
import { compose } from 'ramda';

import {
  withUserDataReducer,
} from './features';

export const combinedReducers = compose(
  combineReducers,
  withUserDataReducer,
)({});
