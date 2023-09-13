import './UniqueProductOffer.css';
import './UniqueProductOfferMediaQueries.css';

import { Button } from '../../ui/Button/Button';

export const UniqueProductOffer = () => {
  return (
    <section className="unique-product-offer">
      <div className="unique-product-offer__img-container">
        <img
          className="unique-product-offer__img"
          src="images/cookies_with_spreads.png"
          alt="unique product offer"
        />
      </div>

      <div className="unique-product-offer__desription">
        <h3 className="title-h3">Натуральне Веганське Печиво ручної роботи 100 гр</h3>

        <div className="unique-product-offer__compound">
          <p>
            Склад: фініки, банан, вівсяні пластівці, борошно спельтове, сода харчова,
            лимонний сік, насіння кунжуту, льон, гарбузове пюре, насіння гарбуза.
          </p>
        </div>

        <div className="unique-product-offer__btn">
          <Button style="primary-btn" text="купити зараз" />
        </div>
      </div>
    </section>
  );
};
