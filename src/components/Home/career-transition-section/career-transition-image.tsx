import CareerTransitionMobileImage from '../../../assets/imgs/career-transition-mobile.svg';
import CareerTransitionDesktopImage from '../../../assets/imgs/career-transition.svg';
import { LazyImage } from '../../Ui/lazy-image/index';

export const CareerTransitionImage: React.FC = () => {
    return (
        <figure className="flex items-center justify-center w-full">
            <LazyImage
                src={CareerTransitionMobileImage}
                alt="Ilustração de transição de carreira mostrando oportunidades de crescimento e desenvolvimento profissional"
                className="block lg:hidden w-full max-w-md"
                ariaLabel="Representação visual de transição de carreira para dispositivos móveis"
            />
            <LazyImage
                src={CareerTransitionDesktopImage}
                alt="Ilustração de transição de carreira mostrando oportunidades de crescimento e desenvolvimento profissional"
                className="hidden lg:block w-full max-w-2xl"
                ariaLabel="Representação visual de transição de carreira para dispositivos desktop"
            />
        </figure>
    );
};
