import type { ReactNode } from 'react';
import React from 'react';
import { ApplicantName, Container } from './styles';
import { Paperclip, User } from 'phosphor-react';

interface ApplicantProps {
  children: ReactNode;
  onClick: any;
}

const Applicant = ({ children, onClick }: ApplicantProps) => {
  return (
    <Container onClick={() => onClick()}>
      <div>
        <User size={22} weight="regular" />
        <ApplicantName>{children}</ApplicantName>
      </div>
      <Paperclip size={23} weight="regular" />
    </Container>
  );
};

export default Applicant;
