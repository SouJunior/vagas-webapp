import { LazyImage } from '../../Ui/lazy-image';
import enterprisesHome from '../../../assets/imgs/hero-home.svg';
import decorateHome from '../../../assets/imgs/decorate-home.svg';

export function EnterprisesLazyImage() {
    return (
        <LazyImage
            src={enterprisesHome}
            alt="Mulher branca em pé, sorrindo e olhando para a direita, segurando um notebook nas mãos"
            className="ml-10 lg:w-[450px]  object-cover"
        />
    );
}

export function EnterprisesLazyBackgroundImage() {
    return (
        <LazyImage
            src={decorateHome}
            alt=""
            className="absolute top-0 left-[45%] hidden lg:block "
        />
    );
}
