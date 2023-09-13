import './Main.css';
import './MainMediaQueries.css';

import { AboutUs } from './AboutUs/AboutUs';
import { Advantages } from './Advantages/Advantages';
import { Bestsellers } from './Bestsellers/Bestsellers';
import { FoodPreparation } from './FoodPreparation/FoodPreparation';
import { Novelties } from './Novelties/Novelties';
import { QualityCertificates } from './QualityCertificates/QualityCertificates';
import { Reviews } from './Reviews/Reviews';
import { UniqueProductOffer } from './UniqueProductOffer/UniqueProductOffer';

export const Main = () => {
  return (
    <main className="main">
      <div className="main__about-us container">
        <AboutUs />
      </div>

      <div className="main__bestsellers container">
        <Bestsellers />
      </div>

      <div className="main__unique-product-offer">
        <UniqueProductOffer />
      </div>

      <div className="main__novelties container">
        <Novelties />
      </div>

      <div className="main__advantages">
        <Advantages />
      </div>

      <div className="main__food-preparation">
        <FoodPreparation />
      </div>

      <div className="main__reviews container">
        <Reviews />
      </div>

      <div className="main__quality-certificates container">
        <QualityCertificates />
      </div>
    </main>
  );
};
