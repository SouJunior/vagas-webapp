import React from 'react';
import {
    ModalContent,
    ModalTitle,
    ModalText,
    CloseModal,
    ModalCloseButton,
} from './styles';

import ModalIcon from '../../../../assets/imgs/mask-group.svg';
import { useNavigate } from 'react-router';
import { MaskBackground } from '../../../LoginCard/PopUpRegisterSuccess/styles';

interface ConfirmModalProps {
    setConfirmModal: (value: boolean) => void;
}

const ConfirmModal = ({ setConfirmModal }: ConfirmModalProps) => {
    const navigate = useNavigate();
    return (
        <MaskBackground>
            <ModalContent>
                <CloseModal>
                    <ModalCloseButton
                        onClick={() => {
                            setConfirmModal(false);
                            navigate('/company-portal');
                            document.body.style.overflow = 'auto';
                        }}
                    >
                        X
                    </ModalCloseButton>
                </CloseModal>
                <div className="modal--texts">
                    <ModalTitle>Atualizações salvas</ModalTitle>
                    <ModalText>
                        Suas atualizações foram alteradas com sucesso
                    </ModalText>
                    <img src={ModalIcon} alt="Sucesso" />
                </div>
            </ModalContent>
        </MaskBackground>
    );
};

export default ConfirmModal;
