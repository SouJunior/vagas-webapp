import { AreaName, Container, IconImage } from './styles';

interface Props {
    icon: React.ReactNode;
    area: string;
}

const TechnologyAreaCard: React.FC<Props> = ({ icon, area }) => {
    return (
        <Container>
            <IconImage>{icon}</IconImage>
            <AreaName>{area}</AreaName>
        </Container>
    );
};

export default TechnologyAreaCard;
