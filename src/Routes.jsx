import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './views/Home';
import Hello from './views/Hello';
import FourOFour from './views/FourOFour';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/hello/:name/:location" component={Hello} />
    <Route component={FourOFour} status={404} />
  </Switch>
);

export default Routes;
