import React from 'react';
import {
    ModalContainer,
    ModalContent,
    ModalTitle,
    ModalText,
    ButtonContent,
    CancelButton,
    ConfirmButton,
} from './styles';

interface CancelModalProps {
    handleConfirmCancel: () => void;
    setCancelModal: (value: boolean) => void;
}

function CancelModal({
    handleConfirmCancel,
    setCancelModal,
}: CancelModalProps) {
    return (
        <ModalContainer>
            <ModalContent>
                <ModalTitle>Deseja Cancelar ?</ModalTitle>
                <ModalText>
                    Tem certeza que deseja cancelar a operação ?
                </ModalText>
                <ButtonContent>
                    <ConfirmButton onClick={() => handleConfirmCancel}>
                        Sim
                    </ConfirmButton>
                    <CancelButton onClick={() => setCancelModal(false)}>
                        Não
                    </CancelButton>
                </ButtonContent>
            </ModalContent>
        </ModalContainer>
    );
}

export default CancelModal;
