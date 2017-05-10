import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Home/Home';
import About from './components/About/About';
import './index.css';
import {Header} from './components/Header';
// Import routing components
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Header title="Welcome to React"/>
      
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,
  document.getElementById('root')
);
