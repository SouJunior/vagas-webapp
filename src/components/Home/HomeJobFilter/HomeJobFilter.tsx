import { useNavigate } from 'react-router-dom';
import { Form, FormWrapper, Input, SearchButton } from './styles';
import { useState } from 'react';

interface JobFilterProps {
    isActive: boolean;
}

const HomeJobFilter: React.FC<JobFilterProps> = ({ isActive }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate(`/jobs?search=${searchTerm}`);
    };

    return (
        <FormWrapper isActive={isActive}>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    isActive={isActive}
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
                    isActive={isActive}
                >
                    Buscar Vaga
                </SearchButton>
            </Form>
        </FormWrapper>
    );
};

export default HomeJobFilter;
