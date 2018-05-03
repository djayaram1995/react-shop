import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RootRouter from './routes';
ReactDOM.render(<RootRouter />, document.getElementById('root'));
registerServiceWorker();
