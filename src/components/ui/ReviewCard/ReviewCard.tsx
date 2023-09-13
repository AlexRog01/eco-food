import './ReviewCard.css';
import './ReviewCardMediaQueries.css';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { Review } from '../../../types/Review';

type Props = {
  review: Review;
};

export const ReviewCard: FC<Props> = ({ review }) => {
  return (
    <div className="review-card" key={review.name}>
      <div className="review-card__person-info">
        <div className="review-card__person-img-container">
          <img
            className="review-card__person-img"
            src={review.avatar}
            alt={`${review.name}&apos;s face`}
          />
        </div>

        <div className="review-card__person">
          <div className="review-card__person-name">{review.name}</div>

          <div className="review-card__person-status">{review.status}</div>
        </div>

        <div className="review-card__grade">
          <div className="review-card__star">
            <FontAwesomeIcon icon={faStar} />
          </div>

          <p className="review-card__grade-number">{review.grade}</p>
        </div>
      </div>

      <div className="review-card__review">
        <p>{review.review}</p>
      </div>
    </div>
  );
};
