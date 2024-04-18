import { Rocket } from 'phosphor-react';
import { Container, ImgWrap, Paragrafo } from '../styles';

const InfoComplementares: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
                <Rocket size={200} color="#046AD0" opacity='0.6'/>
            </ImgWrap>
            <Paragrafo>
                Outra forma de valorizar ainda mais o seu primeiro currículo é
                destacar eventuais certificados que ajudam a demonstrar o seu
                perfil e seus conhecimentos.
            </Paragrafo>
            <br />
            <Paragrafo>
                No exemplo do tópico anterior, além de ter algumas
                qualificações-chave, você também possui os seguintes
                certificados:
                <ul>
                    <li> Inbound Marketing — Escola X - 2016</li>
                    <li>Produção de Conteúdo WEB — Escola Y - 2017</li>
                </ul>
            </Paragrafo>
            <br />
            <Paragrafo>Não esqueça das informações complementares.</Paragrafo>
            <br />
            <Paragrafo>
                Muitas vezes existem informações que não cabem nos tópicos
                anteriores, mas são essenciais para o seu primeiro currículo ou
                para aumentar a chance de conseguir a vaga, tais como:
                <ul>
                    <li>
                        Disponibilidade de viagem ou mudança: se você está
                        tentando um emprego em outra cidade. Se você tem família
                        no outro endereço, por exemplo, você pode destacar essa
                        informação.
                    </li>
                    <li>
                        Se você possui alguma deficiência, como auditiva, você
                        pode indicar que “tem perda auditiva moderada, faz uso
                        de aparelho e se comunica bem verbalmente” e apontar se
                        há alguma necessidade de adaptações ou não.
                    </li>
                </ul>
            </Paragrafo>
        </Container>
    );
};

export default InfoComplementares;
