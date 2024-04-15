import { Container, Img, ImgWrap, Paragrafo } from '../styles';
import Globe from '../../../../../assets/imgs/globe.svg';

const TrabalhosVoluntarios: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
            <Img src={Globe} alt="Ícone de um globo" />
            </ImgWrap>
            <Paragrafo>
                Caso você já tenha feito trabalho voluntário ou pequenos
                serviços, mesmo que informalmente, como ajudar em um comércio
                local, é importante destacar essas informações em seu currículo.
                Os recrutadores valorizam candidatos que demonstram aproveitar
                as oportunidades que surgem para se desenvolverem pessoal e
                profissionalmente.
            </Paragrafo>
        </Container>
    );
};

export default TrabalhosVoluntarios;
