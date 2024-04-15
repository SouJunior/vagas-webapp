import { Container, Img, ImgWrap, Paragrafo } from '../styles';
import Target from '../../../../../assets/imgs/target.svg';

const ExperienciaProfissional: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
            <Img src={Target} alt="Ícone de um alvo"/>
            </ImgWrap>
            <Paragrafo>
                O segundo passo na elaboração do seu primeiro currículo é
                definir qual o seu objetivo profissional. Mas, o que escrever? O
                ideal é que você tenha clareza e direcione o objetivo à vaga.
                Evite escrever coisas como:
            </Paragrafo>
            <br />
            <Paragrafo>
                Desejo conquistar a minha independência pessoal em um ambiente
                de trabalho que traga oportunidades de crescimento. 
            </Paragrafo>
            <br />
            <Paragrafo>
                Um texto assim soa vago, não diz nada. Supondo que você esteja tentando
                uma vaga de vendas em uma loja, você pode escrever algo como:
                Desejo atuar na área de vendas, aprimorando as minhas
                habilidades comerciais e ganhando experiência em lidar com o
                público.
            </Paragrafo>
        </Container>
    );
};

export default ExperienciaProfissional;
