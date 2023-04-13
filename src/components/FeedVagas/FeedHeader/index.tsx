import React from 'react';
import { Link } from 'react-router-dom';
import { Container, NavItem } from './styles';

interface Props {
    activePage: string;
    setActivePage: (page: string) => void;
}

const FeedHeader: React.FC<Props> = ({ activePage, setActivePage }) => {
    return (
        <Container>
            <NavItem
                active={activePage === 'FeedJobs'}
                onClick={() => setActivePage('FeedJobs')}
            >
                <Link to="/FeedJobs">Buscar vagas</Link>
            </NavItem>

            <NavItem
                active={activePage === 'Avaliação de vagas'}
                onClick={() => setActivePage('Avaliação de vagas')}
            >
                <Link to="/">Avaliação de vagas</Link>
            </NavItem>
            <NavItem
                active={activePage === 'Avaliação de empresa'}
                onClick={() => setActivePage('Avaliação de empresa')}
            >
                <Link to="/">Avaliação de empresa</Link>
            </NavItem>
            <NavItem
                active={activePage === 'Cargos e salários'}
                onClick={() => setActivePage('Cargos e salários')}
            >
                <Link to="/">Cargos e salários</Link>
            </NavItem>
        </Container>
    );
};

export default FeedHeader;
