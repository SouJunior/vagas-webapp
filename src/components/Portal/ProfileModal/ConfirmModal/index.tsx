import React from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalText } from './styles';

import ModalIcon from '../../../../assets/imgs/mask-group.svg';

const JobModal: React.FC = () => {
    return (
        <ModalContainer>
            <ModalContent>
                <ModalTitle>Atualizações salvas</ModalTitle>
                <ModalText>
                    Suas atualizações foram alteradas com sucesso
                </ModalText>
                <img src={ModalIcon} alt="Sucesso" />
            </ModalContent>
        </ModalContainer>
    );
};

export default JobModal;
