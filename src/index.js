import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

// don't register service worker
unregister();

ReactDOM.render(<App />, document.getElementById('root'));
