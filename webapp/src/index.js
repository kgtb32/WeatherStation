import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ContextProvider} from './context'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextProvider>
        <div className="container_flex">
        
          <App />
        </div>
      </ContextProvider>
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
