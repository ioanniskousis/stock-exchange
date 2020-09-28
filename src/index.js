import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducersIndex';
import './index.css';
import App from './components/App';
import downloadSymbols from './api/symbols';

const store = createStore(rootReducer, { symbols: [] });
downloadSymbols(store);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root'),
);
