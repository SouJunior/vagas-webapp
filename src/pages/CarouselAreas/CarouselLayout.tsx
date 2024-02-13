import { Outlet } from "react-router-dom"
import Header from "../../components/Portal/Header"
import HomeHeader from "../../components/Home/HomeHeader";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { AreasSection } from "../styles/Home.styles";

import SwiperCore, { Autoplay, Navigation } from 'swiper';
import Index from "../../components/Portal/Footer";
import CarouselAreas from "../../components/CarouselAreas";

SwiperCore.use([Navigation, Autoplay]);

const CarouselLayout = () =>{

    const { user } = useContext(AuthContext);

    return(
        <>
            {user ? (
                <div className="z-[2000] fixed w-full">
                    <Header />
                </div>
            ) : (
                <HomeHeader isActive={true} />
                
            )}
            <AreasSection>
                <CarouselAreas/>
            </AreasSection>
            <Outlet/>
            <Index/>
        </>
    )
}

export default CarouselLayout