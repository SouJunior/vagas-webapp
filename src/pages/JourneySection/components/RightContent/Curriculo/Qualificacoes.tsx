import { Container, Img, ImgWrap, Paragrafo } from '../styles';
import Star from '../../../../../assets/imgs/star.svg';

const Qualificacoes: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
            <Img src={Star} alt="Ícone de uma estrela" />
            </ImgWrap>
            <Paragrafo>
                Ao escrever o primeiro currículo, o campo “Experiência
                Profissional” pode ser substituído pelas suas qualificações, as
                características e conhecimentos que você acumulou ao longo dos
                anos e que o ajudarão na vaga pretendida.
            </Paragrafo>
            <br />
            <Paragrafo>
                Assim, você precisa fazer um exercício de autoconhecimento.
                Pense nas atribuições da vaga que você está disputando, quais as
                habilidades e competências que ela exige e que você possui? Por
                exemplo, uma vaga como “Estágio em Social Media” exige
                candidatos que tenham afinidade com redes sociais, facilidade em
                escrever para públicos distintos e conhecimentos em métricas
                como engajamento, entre outros. E você percebe que possui as
                seguintes qualificações, se:
            </Paragrafo>
            <br />
            <Paragrafo>
                <ul>
                    <li>é heavy user das redes sociais;</li>
                    <li>relaciona-se bem com as pessoas;</li>
                    <li>
                        tem conhecimentos em ferramentas como Photoshop e Corel,
                        que o ajudarão a criar as artes necessárias para as
                        redes sociais;
                    </li>
                    <li>
                        tem senso de organização, essencial para o planejamento
                        de conteúdo;
                    </li>
                    <li>
                        tem criatividade para escrever para públicos diversos;
                    </li>
                    <li>pensa rápido há hora de produzir um conteúdo novo.</li>
                </ul>
            </Paragrafo>
            <br />
            <Paragrafo>
                São itens que você pode destacar como qualificações
                profissionais, aumentando a chance de conseguir a vaga.
            </Paragrafo>
        </Container>
    );
};

export default Qualificacoes;
