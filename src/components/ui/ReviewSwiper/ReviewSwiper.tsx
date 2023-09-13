import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ReviewSwiper.css';

import { FC } from 'react';
import Slider from 'react-slick';

import { Review } from '../../../types/Review';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { NextArrow } from './NextArrow/NextArrow';
import { PrevArrow } from './PrevArrow/PrevArrow';

type Props = {
  reviews: Review[];
};

export const ReviewSwiper: FC<Props> = ({ reviews }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.name} />
      ))}
    </Slider>
  );
};
