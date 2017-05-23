import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import './index.css';
import {Header} from './components/Header';
// Import routing components
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Header title="Welcome to React"/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
