import './Header.css';
import './HeaderMediaQueries.css';

import { NavBar } from './NavBar/NavBar';
import { Specialization } from './Specialization/Specialization';

export const Header = () => {
  return (
    <header className="container">
      <div className="header__navbar">
        <NavBar />
      </div>

      <div className="header__specialization">
        <Specialization />
      </div>
    </header>
  );
};
