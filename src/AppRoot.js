import React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PLASMIC } from './plasmic-init';
import MyComponent from 'MyComponent';

const AppRoot = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MyComponent/>
        </Route>
        <Route path="/plasmic-host" render={() => <PlasmicCanvasHost/>} />
      </Switch>
    </Router>
  );
};

export default AppRoot;