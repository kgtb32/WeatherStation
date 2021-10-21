import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Temperatures from './pages/Temperatures'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="container_flex">
        <Sidebar />
        <Switch>
          <Route path='/' exact component={App}/>
          <Route path='/temperatures' component={Temperatures}/>
        </Switch>
      </div>
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
