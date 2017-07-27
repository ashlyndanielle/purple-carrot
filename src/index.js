import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById('root'));
// registerServiceWorker();
