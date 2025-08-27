import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {
  Image,
  Container,
  Information,
  ContainerStatus,
  Closed,
  InProgress,
  Card,
} from './styles';

interface ApplicationProps {
  id: string;
  companyName: string;
  image: string;
  position: string;
  applicationDate: string;
  closingDate: string;
  status: string;
}

export default function OutlinedCard({
  id,
  image,
  companyName,
  position,
  applicationDate,
  closingDate,
  status,
}: ApplicationProps) {
  return (
    <Card>
      <React.Fragment>
        <CardContent>
          <Container>
            <Information>
              <Image>
                <img src={image} alt="Logo da empresa" />
              </Image>

              <div>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  {companyName}
                </Typography>
                <Typography color="rgba(62, 62, 62, 1)" sx={{ mb: 1.5 }}>
                  {position}
                </Typography>
              </div>
            </Information>
          </Container>

          {status === 'em andamento' && (
            <ContainerStatus>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Candidatou-se em{' '}
                {new Date(applicationDate).toLocaleDateString('pt-BR')}
              </Typography>

              <InProgress>Em andamento</InProgress>
            </ContainerStatus>
          )}

          {status !== 'em andamento' && (
            <ContainerStatus>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Encerrada em {new Date(closingDate).toLocaleDateString('pt-BR')}
              </Typography>
              <Closed>Encerrada</Closed>
            </ContainerStatus>
          )}
        </CardContent>
      </React.Fragment>
    </Card>
  );
}
