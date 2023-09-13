import './Novelties.css';
import './NoveltiesMediaQueries.css';

import novelties from '../../../api/novelties.json';
import { Swiper } from '../../ui/ProductSwiper/ProductSwiper';

export const Novelties = () => {
  return (
    <section className="novelties">
      <h3 className="novelties__title title-h3">Наші новинки</h3>

      <div className="novelties__swiper">
        <Swiper products={novelties} />
      </div>
    </section>
  );
};
