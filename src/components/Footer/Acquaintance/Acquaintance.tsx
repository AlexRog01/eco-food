import './Acquaintance.css';
import './AcquaintanceMediaQueries.css';

import { Button } from '../../ui/Button/Button';
import { Logo } from '../../ui/Logo/Logo';

export const Acquaintance = () => {
  return (
    <div className="acquaintance">
      <div className="acquaintance__logo">
        <Logo />
      </div>

      <p className="acquaintance__description">
        Виробництві органічних продуктів харчування місцевого виробництва.
      </p>

      <div className="acquaintance__btn">
        <Button style={'primary-btn'} text={'ознайомитись з продуктами'} />
      </div>
    </div>
  );
};
