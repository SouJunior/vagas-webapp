import React, { useState } from 'react';
import { Container, Input, Button } from './styles';

interface Props {
    onSubmit: (search: string, location?: string) => void;
}

const FeedSearch: React.FC<Props> = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(searchTerm, location);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Cargo, empresa, palavra-chave"
                    maxLength={30}
                    value={searchTerm}
                    onChange={(event: any) => setSearchTerm(event.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Local"
                    value={location}
                    onChange={(event: any) => setLocation(event.target.value)}
                />
                <Button type="submit">Buscar</Button>
            </form>
        </Container>
    );
};

export default FeedSearch;
