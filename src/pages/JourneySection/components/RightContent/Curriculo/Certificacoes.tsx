import { Container, Img, ImgWrap, Paragrafo } from '../styles';
import Rocket from '../../../../../assets/imgs/rocket.svg';

const ExperienciaProfissional: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
            <Img src={Rocket} alt="Ícone de uma medalha" />
            </ImgWrap>
            <Paragrafo>
                Outra forma de valorizar ainda mais o seu primeiro currículo é
                destacar eventuais certificados que ajudam a demonstrar o seu
                perfil e seus conhecimentos. No exemplo do tópico anterior, além
                de ter algumas qualificações-chave, você também possui os
                seguintes certificados:
            </Paragrafo>
            <br />
            <div style={{ alignItems: 'start' }}>
                <ul>
                    <li>Inbound Marketing — Escola X - 2016</li>
                    <li>Produção de Conteúdo WEB — Escola Y - 2017</li>
                </ul>
            </div>
        </Container>
    );
};

export default ExperienciaProfissional;
