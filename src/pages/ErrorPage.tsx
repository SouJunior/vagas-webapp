import { Link } from 'react-router-dom';
import error404Image from '../assets/imgs/pagina-nao-encontraga-img.svg'
import {Container, Content} from './styles/ErrorPage.styles';
const ErrorPage = () => {
    return (
        <Container>
            <Content>
                <img src={error404Image} alt="" />
                <h1>Página não encontrada!</h1>
                <p>Parece que algo deu errado ou a página não existe. <br /> 
                Por favor, volte para home.</p>
                <Link to="/">Voltar</Link>
            </Content>
        </Container>
    );
}

export default ErrorPage;
