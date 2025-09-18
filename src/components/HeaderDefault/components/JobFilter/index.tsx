import { useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import Search from '../../../../assets/imgs/search.svg';
import Location from '../../../../assets/imgs/location.svg';

import * as S from './styles';

const JobFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('search') || '',
  );
  const [location, setLocation] = useState(searchParams.get('location') || '');

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (pathname !== '/job') {
      setSearchParams({});
    }

    navigate(`/job?search=${searchTerm}&location=${location}`);
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.BoxInput>
        <S.Input
          type="text"
          placeholder="Cargo, empresa, palavra-chave"
          maxLength={30}
          value={searchTerm}
          onChange={(event: any) => setSearchTerm(event.target.value)}
        />

        <S.BtnIcon name="search btn" onClick={handleSubmit}>
          <img src={Search} alt="search btn" />
        </S.BtnIcon>
      </S.BoxInput>

      <S.BoxInput className="location">
        <S.Input
          type="text"
          placeholder="Local"
          maxLength={30}
          value={location}
          onChange={(event: any) => setLocation(event.target.value)}
          className="location"
        />

        <S.BtnIcon className="location" name="location btn">
          <img src={Location} alt="location btn" />
        </S.BtnIcon>
      </S.BoxInput>

      <S.Button type="submit">Pesquisar</S.Button>
    </S.Container>
  );
};

export default JobFilter;
