import './NextArrow.css';
import './NextArrowMediaQueries.css';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
};

export const NextArrow: FC<Props> = ({ onClick, currentSlide, slideCount = 3 }) => {
  const isDisabled = currentSlide === slideCount - 3;

  return (
    <button
      onClick={onClick}
      className={classNames(
        'next-arrow-btn',
        { 'disabled-arrow': isDisabled },
        { 'active-arrow': !isDisabled },
      )}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};
