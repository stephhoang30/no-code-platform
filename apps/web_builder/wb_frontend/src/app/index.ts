import { compose } from 'ramda';

import {
  withClasses,
  withEventEmitter,
  withToaster,
} from '../react-utils';
import { withProvider } from '../redux-logic';
import { withMuiTheme } from '../mui-theme';
import { App as A } from './app';
import classes from './app.module.scss';

export const App = compose(
  withClasses(classes),
  withEventEmitter,
  withProvider,
  withToaster,
  withMuiTheme,
)(A);
