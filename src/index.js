import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui-components';
import App from './App';

window.createMfeContainerInLayout('cart-root');

ReactDOM.render(
  <App />,
  document.querySelector('#cart-root')
);
