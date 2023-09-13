import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSwiper.css';

import { FC } from 'react';
import Slider from 'react-slick';

import { Product } from '../../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { NextArrow } from './NextArrow/NextArrow';
import { PrevArrow } from './PrevArrow/PrevArrow';

type Props = {
  products: Product[];
};

export const Swiper: FC<Props> = ({ products }) => {
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
      {products.map((product) => (
        <ProductCard product={product} key={product.title} />
      ))}
    </Slider>
  );
};
