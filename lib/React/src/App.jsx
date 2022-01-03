/* eslint-disable func-names */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/index.jsx';

const App = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
