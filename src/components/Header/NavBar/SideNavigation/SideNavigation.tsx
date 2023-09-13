/* eslint-disable jsx-a11y/anchor-is-valid */
import './SideNavigation.css';
import './SideNavigationMediaQueries.css';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { Tools } from '../Tools/Tools';

type Props = {
  sideNavValue: boolean;
  handleSideNavToggle: () => void;
};

export const SideNavigation: FC<Props> = ({ sideNavValue, handleSideNavToggle }) => {
  return (
    <div className={sideNavValue ? 'side-nav active container' : 'side-nav'}>
      <ul className="side-nav__items">
        <li className="side-nav__item">
          <button className="resetButtonStyles side-nav__toggle">
            <FontAwesomeIcon icon={faXmark} onClick={handleSideNavToggle} />
          </button>
        </li>
        <li className="side-nav__item">
          <a
            onClick={handleSideNavToggle}
            className="side-nav__link"
            href="#specialization"
          >
            Крамниця
          </a>
        </li>

        <li className="side-nav__item">
          <a onClick={handleSideNavToggle} className="side-nav__link" href="#about-us">
            Про нас
          </a>
        </li>

        <li className="side-nav__item">
          <a onClick={handleSideNavToggle} className="side-nav__link" href="#reviews">
            Відгуки
          </a>
        </li>

        <li className="side-nav__item">
          <a onClick={handleSideNavToggle} className="side-nav__link" href="#contacts">
            Зв&apos;язатися з нами
          </a>
        </li>

        <li className="side-nav__item">
          <Tools hiddenClass={''} />
        </li>
      </ul>
    </div>
  );
};
