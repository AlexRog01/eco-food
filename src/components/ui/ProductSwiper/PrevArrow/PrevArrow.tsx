import './PrevArrow.css';
import './PrevArrowMediaQueries.css';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  onClick?: () => void;
  currentSlide?: number;
};

export const PrevArrow: FC<Props> = ({ onClick, currentSlide }) => {
  const isDisabled = currentSlide === 0;

  return (
    <button
      onClick={onClick}
      className={classNames(
        'prev-arrow-btn',
        { 'disabled-arrow': isDisabled },
        { 'active-arrow': !isDisabled },
      )}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};
