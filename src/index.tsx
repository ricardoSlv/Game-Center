import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.css';
import * as serviceWorker from './serviceWorker';

import Layout from './components/Layout';
import Welcome from './pages/Welcome'
import Leaderboard from './pages/Leaderboard'
import SnakeGame from './games/Snake/SnakeGame'
import PacmanDraw from './games/Pacman/PacmanDraw';
import PacmanGame from './games/Pacman/PacmanGame';

ReactDOM.render(
  <Router>
    <Layout >
      <Switch>
        <Route path="/snake">
          <SnakeGame />
        </Route>
        <Route path="/pacmandraw">
          <PacmanDraw />
        </Route>
        <Route path="/pacman">
          <PacmanGame />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Layout>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
