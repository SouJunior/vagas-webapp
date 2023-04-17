import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    Container,
    NavBar,
    GreenButton,
    WhiteButton,
    Title,
    LinkContainer,
    LinkTag,
    Bar,
    List,
    InputWrapper,
} from './styles/home.styles';
import LogoName from '../assets/imgs/logotipo-icone-extendida.svg';

export const Home: React.FC = () => {
    const [creators, setCreators] = useState<string[]>([
        'Filipe Leoni',
        'Igor Gonçalves',
        'Isabela Hyeda',
        'João Vitor Kremer',
        'Thiago Sansi',
    ]);
    const [newCreator, setNewCreator] = useState('');
    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newCreators: string[] = [...creators];
        newCreators.push(newCreator);
        setCreators(newCreators);
    }

    return (
        <Container>
            <NavBar>
                <Title>
                    <img
                        src={LogoName}
                        alt="Logo SouJunior"
                        width={272}
                        height={272}
                    />
                </Title>
                <Title>
                    <GreenButton>Faça parte - Cadastre-se</GreenButton>
                    <WhiteButton>Login</WhiteButton>
                </Title>
            </NavBar>
            <LinkContainer>
                <h2>Pages</h2>
                <LinkTag>
                    <Link to="/login">Login</Link>
                </LinkTag>

                <LinkTag>
                    <Link to="FeedVagas">Feed de Vagas</Link>
                </LinkTag>
            </LinkContainer>
            <Bar></Bar>
            <InputWrapper>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="creators"
                        onChange={(e) => setNewCreator(e.target.value)}
                    />
                    <button type="submit">submit</button>
                </form>
            </InputWrapper>
            <List>
                <h1>CRIADORES:</h1>
                {creators.map((creators: string, index: number) => (
                    <li key={index}>{creators}</li>
                ))}
            </List>
        </Container>
    );
};
