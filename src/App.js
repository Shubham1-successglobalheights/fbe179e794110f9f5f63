import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';

import Login from './routes/Login';
import Astroid from './routes/Astroid';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/astroid" exact={true} component={Astroid} />
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
