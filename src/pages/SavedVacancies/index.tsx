import { useState } from 'react';
import Header from '../../components/Portal/Header';
import Footer from '../../components/Portal/Footer';
import { CardContent, Container, ContainerTitle, SubTitle, Title } from './styles';
import VacanciesModal from '../../components/Portal/ProfileModal/VacanciesModal';
import OutlinedCard from '../../components/OutlinedCard';

const SavedVacancies = () => {
    const [vacanciesModal, setVacanciesModal] = useState(true);
    return (
        <>
            <Header />
            <Container>
                <ContainerTitle>
                    <Title>Minhas Vagas Salvas</Title>
                    <SubTitle>Veja as vagas que você demonstrou interesse</SubTitle>
                </ContainerTitle>
                <CardContent>
                    <OutlinedCard />
                </CardContent>
            </Container>
            <Footer />
            {vacanciesModal && (
                <VacanciesModal setVacanciesModal={setVacanciesModal} />
            )}
        </>
    );
};

export default SavedVacancies;
