/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navigation.css';
import './NavigationMediaQueries.css';

export const Navigation = () => (
  <nav className="nav">
    <ul className="navigation hide-navigation">
      <li className="navigation__item">
        <a className="navigation__link" href="#specialization">
          Крамниця
        </a>
      </li>

      <li className="navigation__item">
        <a className="navigation__link" href="#about-us">
          Про нас
        </a>
      </li>

      <li className="navigation__item">
        <a className="navigation__link" href="#reviews">
          Відгуки
        </a>
      </li>

      <li className="navigation__item">
        <a className="navigation__link" href="#contacts">
          Зв&apos;язатися з нами
        </a>
      </li>
    </ul>
  </nav>
);
