import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import a11y from 'react-a11y';

import store, { history } from './redux/store';

import config from './config';
import loadScripts from './analytics';
import App from './containers/App';

if (config.USE_ALLY) {
  a11y(React, ReactDOM, {
    rules: {
      'avoid-positive-tabindex': 'warn',
      'button-role-space': 'warn',
      'hidden-uses-tabindex': 'warn',
      'img-uses-alt': 'warn',
      'label-uses-for': 'warn',
      'mouse-events-map-to-key-events': 'warn',
      'no-access-key': 'warn',
      'no-hash-ref': 'warn',
      'no-unsupported-elements-use-aria': 'warn',
      'onclick-uses-role': 'warn',
      'onclick-uses-tabindex': 'warn',
      'redundant-alt': 'warn',
      'tabindex-uses-button': 'warn',
      'use-onblur-not-onchange': 'warn',
      'valid-aria-role': 'warn',
    },
  });
}

loadScripts();
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
