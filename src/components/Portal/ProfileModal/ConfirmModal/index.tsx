import React, { useCallback, useEffect } from 'react';

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
import { AuthContext } from '../../../../contexts/Auth/AuthContext';
import { useContext } from 'react';

interface ConfirmModalProps {
    setConfirmModal: (value: boolean) => void;
}

const ConfirmModal = ({ setConfirmModal }: ConfirmModalProps) => {
    const navigate = useNavigate();

    const auth = useContext(AuthContext);
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setConfirmModal(false);
                document.body.style.overflow = 'auto';
                auth.user.type === 'USER'
                    ? navigate('/candidate-portal')
                    : navigate('/company-portal');
            }
        },
        [setConfirmModal],
    );

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.modal-content')) {
                setConfirmModal(false);
                document.body.style.overflow = 'auto';
                auth.user.type === 'USER'
                    ? navigate('/candidate-portal')
                    : navigate('/company-portal');
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setConfirmModal]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <MaskBackground>
            <ModalContent>
                <CloseModal>
                    <ModalCloseButton
                        /**
                         * @see https://developer.mozilla.org/pt-BR/docs/Web/API/Location/reload
                         */
                        onClick={() => {
                            setConfirmModal(false);
                            auth.user.type === 'USER'
                                ? navigate('/candidate-portal')
                                : navigate('/company-portal');
                            setTimeout(() => window.location.reload(), 0);
                            document.body.style.overflow = 'auto';
                        }}
                    >
                        X
                    </ModalCloseButton>
                </CloseModal>
                <div className="modal--texts">
                    <ModalTitle>Atualizações salvas</ModalTitle>
                    <ModalText>
                        Suas atualizações foram alteradas com sucesso!
                    </ModalText>
                    <img src={ModalIcon} alt="Sucesso" />
                </div>
            </ModalContent>
        </MaskBackground>
    );
};

export default ConfirmModal;
