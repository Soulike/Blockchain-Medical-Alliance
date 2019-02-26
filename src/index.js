import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'bootstrap/scss/bootstrap.scss';
import {Provider} from 'react-redux';
import Router from './Router';
import Store from './Store';
import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <Router />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
