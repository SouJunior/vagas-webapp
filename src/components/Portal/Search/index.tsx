import {
  SearchButton,
  Input,
  Form,
  Container,
  Box,
  Options,
  Border,
  ErrorMessage,
} from './styles';
import type { SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import { useApi } from '../../../hooks/useApi';
import type { Timeout } from 'react-number-format/types/types';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

const Index = () => {
  const navigate = useNavigate();

  const api = useApi();

  interface Jobs {
    id: string;
    title: string;
  }

  const [timer, setTimer] = useState<Timeout>();
  const [field, setField] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Jobs[]>([]);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      if (field) {
        await api.searchJobs(field);
        navigate(`/jobs?search=${field}`);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        setError(true);
      }
    }
  };

  const handleSearchBox = (e: any) => {
    const search = e.target.value;
    setField(search);

    if (timer) {
      clearTimeout(timer);
    }

    if (!search || search.length < 3) {
      setSuggestions([]);
      return;
    }

    setTimer(
      setTimeout(() => {
        api
          .searchJobs(search)
          .then((response) => {
            setSuggestions(response.data);
          })
          .catch(() => setSuggestions([]));
      }, 500),
    );
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (document?.contains(e.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Input
            value={field}
            list="jobs"
            type="text"
            onChange={handleSearchBox}
            placeholder="Digite seu cargo"
          />
          {suggestions.length > 0 && (
            <>
              <Box>
                {suggestions &&
                  suggestions.map((suggestion) => (
                    <Options>
                      <Border />
                      <div
                        onClick={() => {
                          setField(suggestion.title);
                          setSuggestions([]);
                        }}
                        key={suggestion.id}
                      >
                        {suggestion.title}
                      </div>
                    </Options>
                  ))}
                <Container>
                  <Border />
                </Container>
              </Box>
            </>
          )}
        </Container>
        <SearchButton type="submit">Buscar vagas</SearchButton>
      </Form>
      {error && (
        <ErrorMessage>
          Erro durante a busca de vagas, por favor, tente novamente.
        </ErrorMessage>
      )}
    </>
  );
};

export default Index;
