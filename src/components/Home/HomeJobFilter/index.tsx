import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const HomeJobFilter: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate(`/job?search=${searchTerm}`);
    };

    return (
        <S.FormWrapper>
            <S.Form onSubmit={handleSubmit}>
                <S.Input
                    type="text"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Digite o cargo, tipo de contrato ou localidade desejados"
                />
                    <S.SearchButton
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
                    </S.SearchButton>
            </S.Form>
        </S.FormWrapper>
    );
};

export default HomeJobFilter;
