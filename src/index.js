import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { register } from './serviceWorker';
import store from './redux/reducers/store'
import { Provider } from 'react-redux';
import './i18n';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode >
      <App />
    </React.StrictMode>,
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
register();

