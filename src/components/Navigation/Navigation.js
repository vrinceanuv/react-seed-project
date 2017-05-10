import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <div className="Navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}
