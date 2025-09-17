import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './styles';

const FeedSearch = ({ onSearch }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const searchTermFromUrl = searchParams.get('search');
    const locationFromUrl = searchParams.get('location');
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
    <S.Container onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="Cargo, empresa, palavra-chave"
        maxLength={30}
        value={searchTerm}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(event.target.value)
        }
      />
      <S.Input
        type="text"
        placeholder="Local"
        maxLength={30}
        value={location}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setLocation(event.target.value)
        }
      />
      <S.Button type="submit">Buscar Vagas</S.Button>
    </S.Container>
  );
};

export default FeedSearch;
