import { Description, Img, Title, Container } from './styles';

const OurSitesCard = (Props: any) => {
    return (
        <Container>
            <a href={Props.Link}>
                <Title>{Props.Title}</Title>
            </a>
            <Img src={Props.Img} />
            <Description>{Props.Description}</Description>
        </Container>
    );
};

export default OurSitesCard;
