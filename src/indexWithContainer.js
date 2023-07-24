import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.mountCartMfe = (el, accessToken) => {
  console.log(accessToken);

  ReactDOM.render(
    <App accessToken={accessToken} />,
    el
  )
}
