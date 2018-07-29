/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';

import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';

import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap/dist/css/bootstrap.min.css';
import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap/dist/css/bootstrap.min.css.map';
import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';
import '!file-loader?name=[name].[ext]!./externals/styles/font-awesome/css/font-awesome.min.css';
import '!file-loader?name=[name].[ext]!./externals/styles/Ionicons/css/ionicons.min.css';
import '!file-loader?name=[name].[ext]!./externals/styles/AdminLTE.css';
import '!file-loader?name=[name].[ext]!./externals/styles/_all-skins.css';

import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap/dist/fonts/glyphicons-halflings-regular.eot';
import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap/dist/fonts/glyphicons-halflings-regular.svg';
import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf';
import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap/dist/fonts/glyphicons-halflings-regular.woff';
import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2';

import '!file-loader?name=[name].[ext]!./externals/styles/font-awesome/fonts/fontawesome-webfont.eot';
import '!file-loader?name=[name].[ext]!./externals/styles/font-awesome/fonts/fontawesome-webfont.svg';
import '!file-loader?name=[name].[ext]!./externals/styles/font-awesome/fonts/fontawesome-webfont.ttf';
import '!file-loader?name=[name].[ext]!./externals/styles/font-awesome/fonts/fontawesome-webfont.woff';
import '!file-loader?name=[name].[ext]!./externals/styles/font-awesome/fonts/fontawesome-webfont.woff2';

import '!file-loader?name=[name].[ext]!./externals/styles/Ionicons/fonts/ionicons.eot';
import '!file-loader?name=[name].[ext]!./externals/styles/Ionicons/fonts/ionicons.svg';
import '!file-loader?name=[name].[ext]!./externals/styles/Ionicons/fonts/ionicons.ttf';
import '!file-loader?name=[name].[ext]!./externals/styles/Ionicons/fonts/ionicons.woff';

import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js';
import '!file-loader?name=[name].[ext]!./externals/styles/bootstrap/dist/js/bootstrap.min.js';

import '!file-loader?name=[name].[ext]!./externals/styles/jquery/dist/jquery.min.js';
import '!file-loader?name=[name].[ext]!./externals/styles/jquery-ui/jquery-ui.min.js';
import '!file-loader?name=[name].[ext]!./externals/styles/adminlte.js';


/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux store with history
const initialState = {};
const history = createHistory({ basename: '/user' });
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  const cookieVal = getCookie(_globals.config.sustain_login_cookie_name);
  if (cookieVal && cookieVal !== '') {
    eraseCookie(_globals.config.sustain_login_cookie_name);
    window.sessionStorage.setItem(_globals.config.login_session_storage_name, cookieVal);
  } else {
    const authToken = window.sessionStorage.getItem(_globals.config.login_session_storage_name);
    if (authToken && authToken !== '') {
      
    } else {
      window.location = _globals.config.home_page_redirection;
    }
  }
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

function getCookie(name) {
  let nameEQ = `${name  }=`;
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = `${name}=; Max-Age=-99999999;`;
}
