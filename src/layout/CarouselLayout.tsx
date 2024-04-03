import { Outlet } from 'react-router-dom';

import SwiperCore, { Autoplay, Navigation } from 'swiper';

import CarouselAreas from '../components/CarouselAreas';
import MainContainer from '../pages/CarouselAreas/components/MainContainer';
import ContainerCarousel from '../pages/CarouselAreas/components/ContainerCarousel';
import ContainerItens from '../pages/CarouselAreas/components/ContainerItens';

SwiperCore.use([Navigation, Autoplay]);

const CarouselLayout = () => {
    return (
        <MainContainer>
            <ContainerCarousel>
                <CarouselAreas />
            </ContainerCarousel>

            <ContainerItens>
                <Outlet />
            </ContainerItens>
        </MainContainer>
    );
};

export default CarouselLayout;
