import './ProductCard.css';

import { faBucket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { Product } from '../../../types/Product';

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="product-card" key={product.title}>
      <div className="product-card__img-container">
        <img className="product-card__img" src={product.img} alt={product.title} />
      </div>

      <div className="product-card__desc-container">
        <div className="product-card__main-desc">
          <div className="product-card__title">
            <p>{product.title}</p>
          </div>

          <div className="product-card__description">
            <p>{product.description}</p>
          </div>
        </div>

        <div className="product-card__buy">
          <div className="product-card__price">{`₴${product.price}/100г`}</div>
          <FontAwesomeIcon icon={faBucket} className="product-card__bucket" />
        </div>
      </div>
    </div>
  );
};
