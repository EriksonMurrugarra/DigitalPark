import React from 'react';
import Search from '../../search/components/search';

const Header = () => (
  <div>
    <h1> DigitalPark v3</h1>
    <div style={{ textAlign: 'center'}}>
      <h2> Que quieres aprender Hoy? </h2>
      <Search />
    </div>
  </div>
)

export default Header;
