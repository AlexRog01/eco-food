import './Specialization.css';
import './SpecializationMediaQueries.css';

import { Button } from '../../ui/Button/Button';

export const Specialization = () => {
  return (
    <section id="specialization" className="specialization">
      <div className="specialization__photos">
        <div className="specialization__img-container1">
          <img
            className="specialization__img"
            src="images/sprouts_big_quality.jfif"
            alt="green leaves"
          />
        </div>

        <div className="specialization__img-container2">
          <img
            className="specialization__img"
            src="images/leavs_big_qality.jfif"
            alt="green leaves"
          />
        </div>
      </div>

      <div className="specialization__text">
        <h1 className="specialization__title title-h1">Eco Food Ukraine</h1>

        <p className="specialization__description">
          Ми спеціалізуємось на виробництві органічних продуктів харчування місцевого
          виробництва.
        </p>

        <div className="specialization__btn">
          <Button style="secondary-btn" text="Крамниця" />
        </div>
      </div>
    </section>
  );
};
