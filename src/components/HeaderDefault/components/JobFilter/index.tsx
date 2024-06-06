import { useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import * as S from './styles';

const JobFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(
        searchParams.get('search') || '',
    );
    const [location, setLocation] = useState(
        searchParams.get('location') || '',
    );

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (pathname !== '/job') {
            setSearchParams({});
        }

        navigate(`/job?search=${searchTerm}&location=${location}`);
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
