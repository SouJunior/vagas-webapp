import { Container, Img } from './styles';
import Key from '../../../../assets/imgs/key.svg';

const PalavrasChavesContent: React.FC = () => {
    return (
        <Container>
            <Img src={Key} alt="'Ícone de uma chave com borda azul"></Img>
            <p>
                Os recrutadores começam com uma pesquisa por palavra-chave para
                encontrar candidatos viáveis. Faça uma busca rápida de emprego
                para as posições que você deseja. Identifique palavras-chave
                lendo os requisitos do trabalho. Inclua hard skills e soft
                skills apenas se você tiver essas habilidades em seu repertório.
                Essa também é uma ótima maneira de ver se você precisa aprimorar
                suas habilidades para se tornar mais comercializável.
            </p>
            <br />
            <p>
                Seja honesto e autêntico. Se você tem as habilidades, não seja
                tímido mostre-se, mas faça-o autenticamente, não de uma maneira
                de cabeça quente. Sempre inclua o básico, incluindo a melhor
                maneira de chegar até você.
            </p>
            <br />
            <p>
                Personalize o seu URL para o seu nome:
                <a href="www.linkedin.com/in/SeuNomeAqui">
                    {' '}
                    www.linkedin.com/in/SeuNomeAqui
                </a>{' '}
                - isso facilita na busca e deixa seu perfil personalizado.
            </p>
        </Container>
    );
};

export default PalavrasChavesContent;
