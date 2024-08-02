/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.js';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './component/Redux/store.js';
const AppRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => AppRedux);
