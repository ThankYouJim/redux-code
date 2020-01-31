import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from '../GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="header item">Binyorto</Link>
      <div className="right menu">
        <nav>
          <ul>
            <li><Link to ="/" className="item">Streams</Link></li>
            {/* <li><Link to ="/" className="item">Logout</Link></li> */}
          </ul>
        </nav>
      </div>
      <GoogleAuth />
    </div>
  );
}

export default Header;