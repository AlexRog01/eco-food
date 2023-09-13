import './Footer.css';
import './FooterMediaQueries.css';

import { Acquaintance } from './Acquaintance/Acquaintance';
import { AddressAndEmail } from './AddressAndEmail/AddressAndEmail';
import { Contacts } from './Contacts/Contacts';
import { Information } from './Information/Information';

export const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__acquaintance">
        <Acquaintance />
      </div>

      <div className="footer__information">
        <Information />
      </div>

      <div className="footer__address-email">
        <AddressAndEmail />
      </div>

      <div id="contacts" className="footer__contacts">
        <Contacts />
      </div>

      <div className="footer__copyright">
        <p>Copyright © 2023 EcoFood Ukraine. All rights reserved.</p>
      </div>
    </footer>
  );
};
