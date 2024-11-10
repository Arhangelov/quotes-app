import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { QuotesProvider } from './components/context/quoteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <QuotesProvider>
        <App />
      </QuotesProvider>
    </Router>
  </React.StrictMode>
);
