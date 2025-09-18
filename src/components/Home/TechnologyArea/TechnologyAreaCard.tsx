import { useEffect, useState } from 'react';
import { AreaName, Container, IconImage } from './styles';

interface Props {
  icon: React.ReactNode;
  area: string;
  areaId: string;
  areaIdFromUseParams: string | undefined;
}

const TechnologyAreaCard: React.FC<Props> = ({
  icon,
  area,
  areaId,
  areaIdFromUseParams,
}) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setActive(areaId === areaIdFromUseParams);
  }, [areaId, areaIdFromUseParams]);

  return (
    <Container className={active ? 'open' : 'closed'}>
      <IconImage active={active}>{icon}</IconImage>
      <AreaName active={active}>{area}</AreaName>
    </Container>
  );
};

export default TechnologyAreaCard;
