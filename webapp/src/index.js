import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/SideBar';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="container_flex">
        <Sidebar />
        <App />
      </div>
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
