import React from 'react';
import { Container } from './styles';

interface JobInfo {
  title: string;
  description: string;
}

const MatchCard = ({ title, description }: JobInfo) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
};

export default MatchCard;
