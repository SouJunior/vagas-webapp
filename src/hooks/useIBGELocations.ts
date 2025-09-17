import { useState, useEffect } from 'react';
import axios from 'axios';
import type { IBGEUFResponse, IBGECityResponse } from '../@types/ibge';

export const useIBGELocations = () => {
  const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
  const [cities, setCities] = useState<IBGECityResponse[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then((response) => {
        setUfs(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((response) => {
        setCities(response.data);
      });
  }, [selectedUf]);

  function handleSelectUf(event: React.ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  return { ufs, cities, handleSelectUf };
};
