import { Globe } from 'phosphor-react';
import { Container, ImgWrap, Paragrafo } from '../styles';

const TrabalhosVoluntarios: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
            <Globe size={200} color="#046AD0" opacity='0.6'/>
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
