import MainContainer from '../pages/CarouselAreas/components/MainContainer';

interface JourneyLayoutProps {
    children: React.ReactNode;
}

const JourneyLayout: React.FC<JourneyLayoutProps> = ({ children }) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    );
};

export default JourneyLayout;
