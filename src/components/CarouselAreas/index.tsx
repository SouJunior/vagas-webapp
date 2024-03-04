import { Swiper, SwiperSlide } from "swiper/react"
import { AreasCardWrapper, CustomNextButton, CustomPrevButton } from "../../pages/styles/Home.styles"
import { Navigation } from "swiper"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { AreaProps } from "../../pages/Home"
import { Areas } from "../../Mocks/MockArea"
import TechnologyAreaCard from "../Home/TechnologyArea/TechnologyAreaCard"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const CarouselAreas = () => {

    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate()
    const {areaId} = useParams()

    const handleClick = (itemId: string) => {
        navigate(`/areas/${itemId}`)
        window.scrollTo(0,0)
    }

    
        useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1250);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    return (
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
                                onClick={() => handleClick(area.id)}
                            >
                                <div>
                                    <TechnologyAreaCard
                                        icon={area.icon}
                                        area={area.name}
                                        areaId={area.id}
                                        areaIdFromUseParams={areaId}
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
    )
}

export default CarouselAreas