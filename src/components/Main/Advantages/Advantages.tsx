import './Advantages.css';
import './AdvantagesMediaQueries.css';

export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages__advantage">
        <div className="advantages__img-container">
          <img className="advantages__img" src="/images/diamond.png" alt="diamond" />
        </div>

        <p className="advantages__title">Сучасні технології</p>

        <p className="advantages__description">
          Сучасні технології, такі як гідропоніка, аеропоніка, вертикальне фермерство та
          інші, дозволяють ефективно вирощувати їжу в умовах обмеженої площі та з
          використанням мінімальної кількості ресурсів.
        </p>
      </div>

      <div className="advantages__advantage">
        <div className="advantages__img-container">
          <img
            className="advantages__img"
            src="/images/saveWorld.png"
            alt="save world sign"
          />
        </div>

        <p className="advantages__title">100% органічно</p>

        <p className="advantages__description">
          Сучасні методи переробки еко їжі використовуються з мінімальним використанням
          хімічних речовин та енергії.
        </p>
      </div>

      <div className="advantages__advantage">
        <div className="advantages__img-container">
          <img className="advantages__img" src="/images/quality.svg" alt="quality sign" />
        </div>

        <p className="advantages__title">Якість</p>

        <p className="advantages__description">
          Ми надаємо споживачам детальну інформацію про методи вирощування та виробництва,
          сертифікацію, а також про довкілля та соціальну відповідальність компанії
        </p>
      </div>
    </section>
  );
};
