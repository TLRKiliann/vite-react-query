import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar:React.FC = () => {
  return (
    <div className="navbar">
      <ul className="ul--navbar">
        <li>
          <Link
            data-testid="firstLink"
            className="link--tag"
            to='/'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            data-testid="secondlink"
            className="link--tag"
            to='/traditionnal'
          >
            Traditionnal
          </Link>
        </li>
        <li>
          <Link
            data-testid="thirdlink"
            className="link--tag"
            to='/requestquery'
          >
            Requestquery
          </Link>
        </li>
      </ul>    
    </div>
  )
}
export default Navbar;