import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, LocationInput, PrimaryInput } from './styles';

const JobFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate(`/jobs?search=${searchTerm}`);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <PrimaryInput
                    type="text"
                    placeholder="Cargo, empresa, palavra-chave"
                    maxLength={30}
                    value={searchTerm}
                    onChange={(event: any) => setSearchTerm(event.target.value)}
                />
                <LocationInput
                    type="text"
                    placeholder="Local"
                    maxLength={30}
                    value={location}
                    onChange={(event: any) => setLocation(event.target.value)}
                />
                <Button type="submit">Buscar Vagas</Button>
            </form>
        </Container>
    );
};

export default JobFilter;
