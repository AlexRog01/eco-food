import './QualityCertificates.css';
import './QualityCertificatesMediaQueries.css';

export const QualityCertificates = () => {
  return (
    <div className="quality-certificates">
      <div className="quality-certificates__title">
        <h3 className="title-h3">Сертифікати якості</h3>
      </div>
      <div className="quality-certificates__description">
        <div className="quality-certificates__description-container">
          <div className="quality-certificates__desc">
            <p>
              Наша продукція сертифікована відповідно до міжнародного стандарту ENplus®
              ID-No.: UA 012 та DINplus No.: 7А377.
            </p>
          </div>

          <div className="quality-certificates__desc">
            <p>
              Продукція виготовлена з дотриманням технологічних норм та відповідає
              стандартам якості.
            </p>
          </div>
        </div>
        <div className="quality-certificates__images">
          <div className="quality-certificates__img-container">
            <img
              className="quality-certificates__img"
              src="images/certificate1.png"
              alt="certifacate1"
            />
          </div>

          <div className="quality-certificates__img-container">
            <img
              className="quality-certificates__img"
              src="images/certificate2.png"
              alt="certifacate2"
            />
          </div>

          <div className="quality-certificates__img-container">
            <img
              className="quality-certificates__img"
              src="images/certificate3.png"
              alt="certifacate3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
