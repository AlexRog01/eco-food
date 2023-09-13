import './Reviews.css';
import './ReviewsMediaQueries.css';

import reviews from '../../../api/reviews.json';
import { ReviewSwiper } from '../../ui/ReviewSwiper/ReviewSwiper';

export const Reviews = () => {
  return (
    <div id="reviews" className="reviews">
      <h3 className="reviews__title title-h3">Відгуки</h3>

      <div className="reviews__swiper">
        <ReviewSwiper reviews={reviews} />
      </div>
    </div>
  );
};
