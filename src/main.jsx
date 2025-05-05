import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Store from './redux/store.js';
import './styles/index.css';
import { ScrollRestoration } from './utils/scrollUtils.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <ScrollRestoration />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
