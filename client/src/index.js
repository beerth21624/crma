import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import allStores from './store/allStores';
ReactDOM.render(
  <React.StrictMode>
    <Provider {...allStores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
