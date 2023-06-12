import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    form {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 30px;
        height: 37px;
    }
`;

const PrimaryInput = styled.input`
    padding: 10px;
    border-radius: 42px;
    width: 100%;
    max-width: 358px;
    color: #696969;
    font-size: 14px;
    background-color: #ecf5ff;
    border: 1px solid #c1dfff;

    :focus {
        outline-color: #1165ba;
    }
`;

const LocationInput = styled(PrimaryInput)`
    max-width: 234px;
`;

const Button = styled.button`
    padding: 5px 20px;
    background-color: #003986;
    color: #fff;
    width: 100%;
    font-weight: 600;
    font-size: 14px;
    max-width: 148px;
    border: none;
    border-radius: 47px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    height: 100%;

    &:hover {
        background-color: #fff;
        color: #003986;
        border: 1px solid #003986;
    }
`;

const JobFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate(`/jobs?searchTerm=${searchTerm}&location=${location}`);
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
