import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sidebar from './components/SideBar';
import temperatures from './pages/Temperatures'
import App from './App';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="container_flex">
        <Sidebar />
        <Switch>
          <Route path="/" component={App} exact/>
          <Route path="/temperatures" component={temperatures} exact/>
        </Switch>
      </div>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
