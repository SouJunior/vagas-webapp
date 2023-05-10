import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './styles/home.styles';

import HeaderComponents from '../components/HeaderComponents'
import MainComponents from '../components/MainComponents'
import { Footer } from '../components/Footer'
// import LogoName from '../assets/imgs/logotipo-icone-extendida.svg';

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
        <styles.Container>
            {/* <styles.NavBar>
                <styles.Title>
                    <img
                        src={LogoName}
                        alt="Logo SouJunior"
                        width={272}
                        height={272}
                    />
                </styles.Title>
                <styles.Title>
                    <styles.GreenButton>Faça parte - Cadastre-se</styles.GreenButton>
                    <styles.WhiteButton>Login</styles.WhiteButton>
                </styles.Title>
            </styles.NavBar> */}
             <HeaderComponents />
             <styles.mainHero>
                <MainComponents />
             </styles.mainHero>
            {/*<styles.LinkContainer>
                <h2>Pages</h2>
                <styles.LinkTag>
                    <Link to="/login">Login</Link>
                </styles.LinkTag>

                <styles.LinkTag>
                    <Link to="FeedVagas">Feed de Vagas</Link>
                </styles.LinkTag>
                <styles.LinkTag>
                    <Link to="addjobs">Criar vagas</Link>
                </styles.LinkTag>
            </styles.LinkContainer> */}
            {/* <styles.InputWrapper>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="creators"
                        onChange={(e) => setNewCreator(e.target.value)}
                    />
                    <button type="submit">submit</button>
                </form>
            </styles.InputWrapper> */}
            {/* <styles.List>
                <h1>CRIADORES:</h1>
                {creators.map((creators: string, index: number) => (
                    <li key={index}>{creators}</li>
                ))}
            </styles.List> */}
            <Footer />
        </styles.Container>
    );
};
