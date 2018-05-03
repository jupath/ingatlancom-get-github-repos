import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import SingleRepoPage from '../components/SingleRepoPage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/repo/:name" component={SingleRepoPage} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
