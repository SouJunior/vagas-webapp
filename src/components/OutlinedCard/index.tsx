import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useState } from "react";
import { useApi } from '../../hooks/useApi';

import starImage from '../../assets/imgs/kid_star.svg';
import favoriteImage from '../../assets/imgs/kid_star_filled.svg';

import {
  Image,
  Container,
  Information,
  Favorite,
  ContainerStatus,
  Closed,
  InProgress,
  Card
} from './styles';

interface ApplicationProps {
  id: string;
  image: string;
  enterprise: string;
  position: string;
  applicationDate: string;
  closingDate: string;
  status: string;
  favorite: boolean;
  onFavoriteToggle: () => void;
}

const api = useApi();

export default function OutlinedCard({ id, image, enterprise, position, applicationDate, closingDate, status, favorite, onFavoriteToggle }: ApplicationProps) {

  const [liked, setLiked] = useState(favorite);

  async function favoriteApplication() {
    const newValue = !liked;
    setLiked(newValue);

    try {
      await api.updateFavorite(id, newValue);
      onFavoriteToggle();
    } catch (error) {
      console.error('Erro ao atualizar favorito:', error);
      setLiked(!newValue);
    }
  }

  return (
    <Card>
      <React.Fragment>
        <CardContent>
          <Container>

            <Information>
              <Image>
                <img src={image} alt="Logo da empresa" border-radius="10px"
                />
              </Image>

              <div>
                <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                  {enterprise}
                </Typography>
                <Typography
                  color="rgba(62, 62, 62, 1)"
                  sx={{ mb: 1.5 }}>
                  {position}
                </Typography>
              </div>
            </Information>
            <Favorite>
              <button
                onClick={favoriteApplication}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    favoriteApplication();
                  }
                }}
                title={favorite === true ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              >
                <img
                  src={favorite === false ? starImage : favoriteImage}
                  alt="estrela"
                  width="100%"
                />
              </button>
            </Favorite>
          </Container>


          {status === 'active' && (
            <ContainerStatus>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Candidatou-se em {applicationDate}
              </Typography>

              <InProgress>Em andamento</InProgress>
            </ContainerStatus>
          )}

          {status !== 'active' && (
            <ContainerStatus>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Encerrada em {closingDate}
              </Typography>
              <Closed>Encerrada</Closed>
            </ContainerStatus>)}

        </CardContent>
      </React.Fragment>

    </Card>
  );
}
