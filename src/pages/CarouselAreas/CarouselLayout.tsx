import { Outlet } from "react-router-dom"
import Header from "../../components/Portal/Header"
import HomeHeader from "../../components/Home/HomeHeader";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { AreasCardWrapper, AreasSection, CustomNextButton, CustomPrevButton } from "../styles/Home.styles";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Areas } from "../../Mocks/MockArea";
import { AreaProps } from "../Home";
import TechnologyAreaCard from "../../components/Home/TechnologyArea/TechnologyAreaCard";
import Index from "../../components/Portal/Footer";

SwiperCore.use([Navigation, Autoplay]);

const CarouselLayout = () =>{

    const [isActive, setIsActive] = useState(true);
    const { user } = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(false);

    const breakpoints = {
        350: {
            slidesPerView: 3,
        },
        515: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 8,
        },
        1440: {
            slidesPerView: 9,
        },
    };

    return(
        <>
            {user ? (
                <div className="z-[2000] fixed w-full">
                    <Header />
                </div>
            ) : (
                <HomeHeader isActive={isActive} />
                
            )}
            <AreasSection>
                <AreasCardWrapper>
                    <Swiper
                        modules={[Navigation]}
                        autoplay={{delay: 2500, disableOnInteraction: false}}
                        breakpoints={breakpoints}
                        navigation={{
                            nextEl: '.swiper-next-button',
                            prevEl: '.swiper-prev-button',
                        }}
                        className="mySwiper"
                        style={{
                            width: '100%',
                            maxWidth: 'screen-width',
                            paddingLeft: isMobile ? '0px' : '75px',
                            paddingRight: '40px',
                        }}
                    >
                        {!isMobile && (
                            <CustomPrevButton className="swiper-prev-button">
                                <CaretLeft size={42} />
                            </CustomPrevButton>
                        )}

                        {Areas.map((area: AreaProps) => (
                            <SwiperSlide
                                key={area.name}
                                className="swiper-slide-responsive"
                                onClick={() => console.log(area.id)}
                            >
                                <div >
                                    <TechnologyAreaCard
                                        icon={area.icon}
                                        area={area.name}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        {!isMobile && (
                            <CustomNextButton className="swiper-next-button">
                                <CaretRight size={42} />
                            </CustomNextButton>
                        )}
                    </Swiper>
                </AreasCardWrapper>
            </AreasSection>
            <Outlet/>
            <Index/>
        </>
    )
}

export default CarouselLayout