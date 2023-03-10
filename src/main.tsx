import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { preload } from 'swr';
import { requests, baseEndpoint as cacheKey } from './api/API';

preload(cacheKey, requests.getTodos);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
