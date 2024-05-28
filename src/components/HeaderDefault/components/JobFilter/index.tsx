import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const JobFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate(`/job?search=${searchTerm}`);
    };

    return (
        <S.Container onSubmit={handleSubmit}>
            <S.SearchJob
                type="text"
                placeholder="Cargo, empresa, palavra-chave"
                maxLength={30}
                value={searchTerm}
                onChange={(event: any) => setSearchTerm(event.target.value)}
            />

            <S.LocationInput
                type="text"
                placeholder="Local"
                maxLength={30}
                value={location}
                onChange={(event: any) => setLocation(event.target.value)}
            />

            <S.Button type="submit">Pesquisar</S.Button>
        </S.Container>
    );
};

export default JobFilter;
