// React
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

// Components
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

