import './Contacts.css';
import './ContactsMediaQueries.css';

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contacts = () => {
  return (
    <div className="contacts">
      <h4 className="title-h4">Контакти</h4>

      <a className="contacts__number-container" href="tel:+380998978889">
        <div className="contacts__operator-icon-container">
          <img
            className="contacts__icon-img"
            src="/images/vodafone.png"
            alt="vodafone icon"
          />
        </div>
        <p>(099) 897 88 89</p>
      </a>

      <a className="contacts__number-container" href="tel:+380978552390">
        <div className="contacts__operator-icon-container">
          <img
            className="contacts__icon-img"
            src="/images/kyivstar.png"
            alt="kyivstar icon"
          />
        </div>
        <p>(097) 855 23 90</p>
      </a>

      <ul className="contacts__social-media">
        <li className="contacts__soc-media-item">
          <a
            href="https://www.instagram.com/sasha.rglk/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="contacts__soc-media-item">
          <a
            href="https://www.facebook.com/profile.php?id=100035297857249&sk=photos"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="contacts__soc-media-item">
          <a
            href="www.linkedin.com/in/oleksandr-rohulko-b829aa281"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="contacts__soc-media-item">
          <a href="https://twitter.com/?lang=ua" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  );
};
