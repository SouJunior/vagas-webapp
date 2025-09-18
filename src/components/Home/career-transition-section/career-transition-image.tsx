import CareerTransitionMobileImage from '../../../assets/imgs/career-transition-mobile.svg';
import CareerTransitionDesktopImage from '../../../assets/imgs/career-transition.svg';
import { LazyImage } from '../../Ui/lazy-image/index';

export const CareerTransitionImage: React.FC = () => {
  return (
    <figure className="flex w-full items-center justify-center">
      <LazyImage
        src={CareerTransitionMobileImage}
        alt="Ilustração de transição de carreira mostrando oportunidades de crescimento e desenvolvimento profissional"
        className="block w-full max-w-md lg:hidden"
        ariaLabel="Representação visual de transição de carreira para dispositivos móveis"
      />
      <LazyImage
        src={CareerTransitionDesktopImage}
        alt="Ilustração de transição de carreira mostrando oportunidades de crescimento e desenvolvimento profissional"
        className="hidden w-full max-w-2xl lg:block"
        ariaLabel="Representação visual de transição de carreira para dispositivos desktop"
      />
    </figure>
  );
};
