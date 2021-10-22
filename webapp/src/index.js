import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sidebar from './components/SideBar/SideBar';
import temperatures from './pages/Temperatures'
import Home from './pages/Home'

import {ContextProvider} from './context'

import './index.css';

import './i18n';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextProvider>
        <div className="container_flex">
          <Sidebar />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/temperatures" component={temperatures} exact/>
          </Switch>
        </div>
      </ContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
