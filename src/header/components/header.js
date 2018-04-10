import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../search/components/search';
import './header.css';

const Header = () => {
  const appTitle = APP_TITLE;

  return (
    <div className="Header">
      <h1> { appTitle } v5</h1>
      <ul>
        <li><Link to="/"> Courses</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  )
}

export default Header;
