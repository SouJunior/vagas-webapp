import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Container, Button, Input } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const FeedSearch = ({ onSearch }: any) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const navigate = useNavigate();
    const { search } = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(search);
        const searchTermFromUrl = searchParams.get('search');
        const locationFromUrl = searchParams.get("location");
        setSearchTerm(searchTermFromUrl || '');
        setLocation(locationFromUrl || '');
    }, [search]);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            onSearch(searchTerm);
        }
        navigate(`/jobs?search=${searchTerm}&location=${location}`);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Cargo, empresa, palavra-chave"
                    maxLength={30}
                    value={searchTerm}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setSearchTerm(event.target.value)
                    }
                />
                <Input
                    type="text"
                    placeholder="Local"
                    maxLength={30}
                    value={location}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setLocation(event.target.value)
                    }
                />
                <Button type="submit">Buscar Vagas</Button>
            </form>
        </Container>
    );
};

export default FeedSearch;
