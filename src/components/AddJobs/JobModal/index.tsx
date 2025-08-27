import React from 'react';
import {
  BackButton,
  ButtonContainer,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ViewJobButton,
} from './styles';

interface Props {
  onClose: () => void;
}

const JobModal: React.FC<Props> = ({ onClose }) => {
  return (
    <ModalContainer onClick={onClose}>
      <ModalContent>
        <ModalTitle>Sua Vaga foi publicada com Sucesso!!</ModalTitle>
        <img src="/assets/SucessModal.svg" alt="Sucesso" />
        <ButtonContainer>
          <BackButton onClick={onClose}>Voltar ao início</BackButton>
          <ViewJobButton>Visualizar Vaga</ViewJobButton>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default JobModal;
