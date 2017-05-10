import React, { Component } from 'react';
import './About.css';
import {Header} from '../Header';

class About extends Component {

  render() {
    return (
      <div>
        <Header title="About page"/>
        <div className="About">
          This is the about page. The other component!
        </div>
      </div>
    );
  }
}

export default About;
