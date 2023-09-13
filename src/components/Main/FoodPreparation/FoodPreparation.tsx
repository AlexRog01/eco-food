/* eslint-disable jsx-a11y/media-has-caption */
import './FoodPreparation.css';
import './FoodPreparationMediaQueries.css';

import { faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

export const FoodPreparation = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="food-preparation container">
      <div className="food-preparation__video-container">
        <button
          className="food-preparation__control-btn resetButtonStyles"
          onClick={toggleVideo}
        >
          {!isPlaying && (
            <img
              className="food-preparation__control-btn-icon"
              src="/images/play.png"
              alt="play btn"
            />
          )}
        </button>

        <video
          className="food-preparation__video"
          ref={videoRef}
          src="/images/ecoFoodVIdeo.mp4"
          controls={isPlaying}
          poster="/images/videoPoster.jfif"
        >
          Sorry, your browser doesn&apos;t support embedded videos, but don&apos;t worry,
          you can
          <a href="https://www.youtube.com/watch?v=oohJFSHAwTc">watch it here</a>
        </video>
      </div>

      <div className="food-preparation__info container">
        <div className="food-preparation__title-container">
          <h3 className="title-h3">Пошук та підготовка продуктів</h3>
        </div>
        <div className="food-preparation__desc1">
          <p>
            У Eco Food Ukraine ми покладаємо особливу увагу на процес пошуку та підготовки
            продуктів екологічного харчування. Наша компанія присвячена наданню
            найякісніших та екологічно чистих продуктів, і ми прагнемо зробити цей процес
            легким та зручним для наших клієнтів.
          </p>
        </div>
        <div className="food-preparation__desc2">
          <p>
            Здорова їжа, яка вирощується з дбайливим ставленням до навколишнього
            середовища, сприяє нашому фізичному та емоційному благополуччю. Тим самим, ми
            підтримуємо екологічне виробництво, зменшуємо використання шкідливих хімічних
            речовин та мінімізуємо негативний вплив на природу.
          </p>
        </div>
      </div>
    </section>
  );
};
