import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducersIndex';
import './index.css';
import App from './components/App';
import downloadInstruments from './api/instruments';

const store = createStore(
  rootReducer,
  {
    exchangesData: {
      instruments: [],
      exchanges: [],
      filter: 'All Exchanges',
      view: 'List',
    },
  },
);

downloadInstruments(store);

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root'),
);
