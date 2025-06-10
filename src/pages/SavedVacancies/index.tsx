import { useState, useEffect } from 'react';
import Header from '../../components/Portal/Header';
import Footer from '../../components/Portal/Footer';
import { CardContainer, CardContent, Container, ContainerTitle, Message, SubTitle, Title } from './styles';
import VacanciesModal from '../../components/Portal/ProfileModal/VacanciesModal';
import OutlinedCard from '../../components/OutlinedCard';
import { useApi } from '../../hooks/useApi';

const SavedVacancies = () => {
    const [vacanciesModal, setVacanciesModal] = useState(true);
    const [savedVacancies, setSavedVacancies] = useState([]);  
    const api = useApi();

    const fetchSavedVacancies = async () => {
        try {
            const response = await api.getApplications();
            const saved = response.filter(vaga => vaga.favorite);  
            setSavedVacancies(saved);
        } catch (error) {
            console.error('Erro ao carregar vagas salvas:', error);
        }
    };

    useEffect(() => {
        fetchSavedVacancies();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <ContainerTitle>
                    <Title>Minhas Vagas Salvas</Title>
                    <SubTitle>Veja as vagas que você demonstrou interesse</SubTitle>
                </ContainerTitle>
                <CardContainer>
                    <CardContent>
                        {savedVacancies.length === 0 ? (
                            <Message>Você não possui vagas salvas.</Message>
                        ) : (
                            savedVacancies.map(vaga => (
                            <OutlinedCard
                                key={vaga.id}
                                id={vaga.id}
                                image={vaga.image}
                                enterprise={vaga.enterprise}
                                position={vaga.position}
                                applicationDate={vaga.applicationDate}
                                closingDate={vaga.closingDate}
                                status={vaga.status}
                                favorite={vaga.favorite}
                                onFavoriteToggle={fetchSavedVacancies}
                            />
                            ))
                        )}
                    </CardContent>
                </CardContainer>
            </Container>
            <Footer />
            {vacanciesModal && (
                <VacanciesModal setVacanciesModal={setVacanciesModal} />
            )}
        </>
    );
};

export default SavedVacancies;
