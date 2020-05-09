import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import * as serviceWorker from './serviceWorker';
import style from "../src/components/login/formstyle.css";

ReactDOM.render(<App/>, document.getElementById('container'));

serviceWorker.unregister();