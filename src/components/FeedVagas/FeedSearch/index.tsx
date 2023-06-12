import React, { useEffect, useState } from 'react';
import { Container, Button, PrimaryInput, LocationInput } from './styles';
import Fuse from 'fuse.js';

const FeedSearch: React.FC<any> = ({
    FilterTerm,
    onFilter,
    Location,
    data,
    setFilteredJobs,
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        handleSearch();
        setSearchTerm(FilterTerm);
        setLocation(Location);
    }, [data]);

    const handleSearch = () => {
        if (!searchTerm && !location) {
            setFilteredJobs(data);
            onFilter(data);
            return;
        }

        const options = {
            keys: [
                'title',
                'contractType',
                'type',
                'city',
                'federalUnit',
                'modality',
                'prerequisites',
                'typeContract',
            ],
            includeScore: true,
            threshold: 0.4,
            minMatchCharLength: 2,
            matchAllTokens: true,
            useExtendedSearch: true,
        };

        const fuse = new Fuse(data, options);
        const filteredResults = fuse.search(`${searchTerm} ${location}`);

        setFilteredJobs(
            filteredResults.length > 0
                ? filteredResults.map((result) => result.item)
                : data,
        );

        onFilter(filteredResults.map((result: any) => result.item));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchTerm || location) {
            handleSearch();
        } else {
            setFilteredJobs(data);
            onFilter(data);
        }
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

export default FeedSearch;
