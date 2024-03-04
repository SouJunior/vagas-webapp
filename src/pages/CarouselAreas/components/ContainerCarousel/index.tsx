import { SectionCarousel } from './style';

interface ContainerCarouselProps {
    children: React.ReactNode;
}

const ContainerCarousel: React.FC<ContainerCarouselProps> = ({ children }) => {
    return <SectionCarousel>{children}</SectionCarousel>;
};

export default ContainerCarousel;
