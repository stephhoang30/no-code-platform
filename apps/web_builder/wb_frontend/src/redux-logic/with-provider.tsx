import { Provider } from 'react-redux';
import { store } from './store';
import { DefaultFcProps } from '../react-utils';

export const withProvider = (Component: React.FC<DefaultFcProps>) => (props: DefaultFcProps) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
