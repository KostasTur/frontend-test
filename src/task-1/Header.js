import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
