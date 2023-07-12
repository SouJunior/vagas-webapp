import {
    Main,
    Container,
    Row,
    Copyright,
    Position,
    ProfileButton,
} from './styles/CandidatePortalStyles';
import Footer from '../components/Portal/Footer/index';
import Header from '../components/Portal/Header';
import Search from '../components/Portal/Search';
import CurriculumImage from '../assets/imgs/cv.svg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useContext } from 'react';

const CandidatePortal = () => {
    const navigate = useNavigate();
    const auth: any = useContext(AuthContext);

    return (
        <Container>
            <Header />
            <Main>
                <Search />
                <Row />
                <h1>{auth.user.name}, atualize seu currículo!</h1>
                <ProfileButton onClick={() => navigate('/candidate-settings')}>
                    <div>
                        <img src={CurriculumImage} alt="currículo" />
                    </div>
                    <div>Atualizar meu currículo</div>
                </ProfileButton>
            </Main>
            <Position>
                <Main>
                    <Row />
                </Main>
                <Footer />
                <Main>
                    <Row />
                </Main>
            </Position>
            <Copyright>&copy; 2023 SouJunior</Copyright>
        </Container>
    );
};

export default CandidatePortal;
