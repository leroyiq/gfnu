import { Advantages } from 'components/Advantages';
import { Footer } from 'components/Footer';
import { Futures } from 'components/Futures';
import { Navigation } from 'components/Navigation';
import { SliderMain } from 'components/SliderMain';

export const App = () => {
  return (
    <div className="container">
      <Navigation />
      <SliderMain />
      <Futures />
      <Advantages />
      <Footer />
    </div>
  );
};
