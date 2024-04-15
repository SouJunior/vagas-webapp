import { Container, Img, ImgWrap, Paragrafo } from '../styles';
import Bussines from '../../../../../assets/imgs/business_center.svg';

const OQueEvitar: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
                <Img src={Bussines} alt="Ícone de uma mala" />
            </ImgWrap>
            <Paragrafo>Formatação e Ortografia</Paragrafo>
            <Paragrafo>
                <ul>
                    <li>
                        seja direto, escreva somente o que for necessário e de
                        forma simples;
                    </li>
                    <li>evite erros ortográficos;</li>
                    <li>evite ultrapassar mais de duas folhas A4;</li>
                    <li>
                        evite fontes cursivas ou de difícil leitura ao escrever
                        o currículo. Prefira a Arial ou Times New Roman, mais
                        tradicionais e de fácil leitura;
                    </li>
                    <li>evite assinar e datar o currículo;</li>
                    <li>
                        evite encher o currículo de cores, no máximo use o
                        Negrito para destacar os tópicos e as informações
                        relevantes.
                    </li>
                </ul>
            </Paragrafo>
            <br />
            <Paragrafo>Dados Pessoais e Referências</Paragrafo>
            <Paragrafo>
                <ul>
                    <li>
                        evite colocar documentos, nomes dos pais e agregados;
                    </li>
                    <li>
                        contatos de referências só devem ser passados quando
                        solicitados em uma eventual entrevista;
                    </li>
                    <li>evite ultrapassar mais de duas folhas A4;</li>
                    <li>
                        o mesmo serve para foto e pretensão salarial, só devem
                        constar no currículo se for solicitado no anúncio da
                        vaga.
                    </li>
                </ul>
            </Paragrafo>
            <Paragrafo>Conhecimentos e Habilidades</Paragrafo>
            <Paragrafo>
                <ul>
                    <li>
                        Não exagere em seus conhecimentos e habilidades de
                        informática e idiomas, serão detalhes facilmente
                        descobertos em uma entrevista, caso não sejam verídicos.
                    </li>
                </ul>
            </Paragrafo>
        </Container>
    );
};

export default OQueEvitar;
