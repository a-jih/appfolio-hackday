import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
