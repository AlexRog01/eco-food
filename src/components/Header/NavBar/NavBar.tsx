import './NavBar.css';
import './NavBarMediaQueries.css';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { Logo } from '../../ui/Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { SideNavigation } from './SideNavigation/SideNavigation';
import { Tools } from './Tools/Tools';
import React from 'react';

export const NavBar = () => {
  const [sideNavValue, setSideNavValue] = useState(false);

  const handleSideNavToggle = () => {
    setSideNavValue(!sideNavValue);

    if (!sideNavValue) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <>
      <div className="navbar">
        <Logo />

        <Navigation />

        <Tools hiddenClass={'hide-tools'} />

        <button className="resetButtonStyles navbar__burger-menu show-burger-menu">
          <FontAwesomeIcon icon={faBars} onClick={handleSideNavToggle} />
        </button>
      </div>

      <SideNavigation
        sideNavValue={sideNavValue}
        handleSideNavToggle={handleSideNavToggle}
      />
    </>
  );
};
