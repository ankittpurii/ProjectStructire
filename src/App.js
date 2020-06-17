import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import Router from './navigation/Router';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
