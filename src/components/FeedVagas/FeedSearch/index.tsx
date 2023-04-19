import React, { useEffect, useState } from 'react';
import { Container, Input, Button } from './styles';
import Fuse from 'fuse.js';

interface Props {
    onSubmit: (search: string, location?: string) => void;
}

const FeedSearch: React.FC<any> = ({ onSubmit, data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [results, setResults] = useState<any>([]);

    const handleSearch = () => {
        const options = {
            keys: ['title', 'company', 'headquarters'],
            includeScore: true,
            threshold: 0.3,
            minMatchCharLength: 2,
        };

        const fuse = new Fuse(data, options);
        const filteredResults = fuse.search(`${searchTerm} ${location}`);

        setResults(filteredResults);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSearch();
        onSubmit(searchTerm, location);
    };

    const handleReset = () => {
        setSearchTerm('');
        setLocation('');
        setResults([]);
        onSubmit('', '');
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
