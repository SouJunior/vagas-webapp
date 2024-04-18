import { Rocket } from 'phosphor-react';
import { Container, Img, ImgWrap, Paragrafo } from '../styles';

const ExperienciaProfissional: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
            <Rocket size={200} color="#046AD0" opacity='0.6'/>,
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
