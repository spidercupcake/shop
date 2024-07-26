import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="font-poppins flex justify-center items-center min-h-screen bg-slateblue">
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
