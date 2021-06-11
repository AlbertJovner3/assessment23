import React, { useState, useEffect } from 'react';
import { Buttontwo } from './Buttontwo';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          SCP <img src="images/scplogo.jpg" alt="logo" width="45" height="45"></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/scp'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SCP
              </Link>
            </li>

            <li>
              <Link
                to='/video'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Videos
              </Link>
            </li>
          </ul>
          {button && <Buttontwo buttonStyle='btn2--outline'>Videos</Buttontwo>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
