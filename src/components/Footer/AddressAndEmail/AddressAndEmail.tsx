import './AddressAndEmail.css';
import './AddressAndEmailMediaQueries.css';

export const AddressAndEmail = () => {
  return (
    <div className="address-and-email">
      <h4 className="title-h4">Наша адреса</h4>

      <a
        className="address-and-email__address"
        href="https://www.google.com/maps/search/м.+Ужгород,+пр.+Соборний,+24/@48.6523015,22.72928,8.82z?entry=ttu"
        target="_blank"
        rel="noreferrer"
      >
        м. Ужгород, пр. Соборний, 24
      </a>

      <div className="footer__email">
        Email:
        <a href="mailto:info@ecofood.in.ua">info@ecofood.in.ua</a>
      </div>
    </div>
  );
};
