import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './PDF';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import './index.css';

function renderApp (node) {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    node
  )
}

const rootNode = document.getElementById('root')
renderApp(rootNode)
reportWebVitals(sendToVercelAnalytics);
