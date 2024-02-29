import { Outlet } from 'react-router-dom';
import Header from '../../components/Portal/Header';
import HomeHeader from '../../components/Home/HomeHeader';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

import SwiperCore, { Autoplay, Navigation } from 'swiper';
import Index from '../../components/Portal/Footer';
import CarouselAreas from '../../components/CarouselAreas';
import MainContainer from './components/MainContainer';
import ContainerCarousel from './components/ContainerCarousel';
import ContainerItens from './components/ContainerItens';

SwiperCore.use([Navigation, Autoplay]);

const CarouselLayout = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {user ? (
                <div className="z-[2000] fixed w-full">
                    <Header />
                </div>
            ) : (
                <HomeHeader isActive={true} />
            )}
            <MainContainer>
                <ContainerCarousel>
                    <CarouselAreas />
                </ContainerCarousel>

                <ContainerItens>
                    <Outlet />
                </ContainerItens>
            </MainContainer>
            <Index />
        </>
    );
};

export default CarouselLayout;
