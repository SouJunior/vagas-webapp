import { useNavigate } from 'react-router-dom';
import { Form, FormWrapper, Input, SearchButton } from './styles';
import { useState } from 'react';

const HomeJobFilter: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate(`/job?search=${searchTerm}`);
    };

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Digite o cargo, tipo de contrato ou localidade desejados"
                />
                <SearchButton
                    type="submit"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                        })
                    }
                >
                    Buscar Vaga
                </SearchButton>
            </Form>
        </FormWrapper>
    );
};

export default HomeJobFilter;
