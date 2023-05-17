import { AreaName, Container, IconImage } from './styles';

interface Props {
    icon: React.ReactNode;
    area: string;
    onClick: () => void;
}

const TechnologyAreaCard: React.FC<Props> = ({ icon, area, onClick }) => {
    return (
        <Container onClick={onClick}>
            <IconImage>{icon}</IconImage>
            <AreaName>{area}</AreaName>
        </Container>
    );
};

export default TechnologyAreaCard;
