import './AboutUs.css';
import './AboutUsMediaQueries.css';

import { Button } from '../../ui/Button/Button';

export const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <h3 className="about-us__title title-h3">Про нас</h3>

      <div className="about-us__description">
        <p>
          Наша компанія присвячена створенню високоякісних продуктів, які вирощуються та
          виробляються з дбайливим ставленням до навколишнього середовища.
        </p>

        <div className="about-us__btn">
          <Button style="primary-btn" text="ознайомитись з продуктами" />
        </div>
      </div>

      <div className="about-us__description">
        Ми прагнемо забезпечити споживачів здоровою та натуральною альтернативою у світі
        харчових продуктів.
      </div>
    </section>
  );
};
