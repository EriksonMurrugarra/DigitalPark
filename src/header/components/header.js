import React from 'react';
import Search from '../../search/components/search';

const Header = () => {
  const appTitle = APP_TITLE;

  return (<div>
    <h1> { appTitle } v4</h1>
    <div style={{ textAlign: 'center'}}>
      <h2> Que quieres aprender Hoy? </h2>
      <Search />
    </div>
  </div>)
}

export default Header;
