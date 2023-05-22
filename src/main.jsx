import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<>Loading...</>}>
    <BrowserRouter basename="/RealEstate">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Suspense>
);
