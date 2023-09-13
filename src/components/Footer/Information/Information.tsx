/* eslint-disable jsx-a11y/anchor-is-valid */
import './Information.css';
import './InformationMediaQueries.css';

export const Information = () => {
  return (
    <div className="information">
      <h4 className="title-h4">Інформація</h4>

      <ul className="information__nav-list">
        <li className="information__item">
          <a className="information__link" href="#about-us">
            Про нас
          </a>
        </li>
        <li className="information__item">
          <a className="information__link" href="#">
            Доставка
          </a>
        </li>
        <li className="information__item">
          <a className="information__link" href="#">
            Оплата
          </a>
        </li>
        <li className="information__item">
          <a className="information__link" href="#">
            Політика конфеденційності
          </a>
        </li>
        <li className="information__item">
          <a className="information__link" href="#">
            Умови повернення
          </a>
        </li>
      </ul>
    </div>
  );
};
