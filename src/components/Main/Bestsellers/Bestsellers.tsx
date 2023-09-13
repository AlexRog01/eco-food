import './Bestsellers.css';
import './BestsellersMediaQueries.css';

import bestsellers from '../../../api/bestsellers.json';
import { Swiper } from '../../ui/ProductSwiper/ProductSwiper';

export const Bestsellers = () => {
  return (
    <section className="bestsellers">
      <h3 className="bestsellers__title title-h3">Хіти продажів</h3>

      <div className="bestsellers__swiper">
        <Swiper products={bestsellers} />
      </div>
    </section>
  );
};
