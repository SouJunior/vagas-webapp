import React, { useState } from 'react';
import {
    Background,
    ContainerModal,
    ContainerPhrase,
    ButtonContainer,
    DenyButton,
    AffirmationButton,
    ConfirmeModal,
    ConfirmationParagraph,
    Close
} from './styles';

import CloseIcon from '@mui/icons-material/Close';

import Confirme from '../../assets/imgs/confirme.svg';
import AlertNotifications from '../Alert';

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    isApplicationApplied: boolean;
    setApplicationApplied: (isApplicationApplied: boolean) => void;
}

export default function Modal({ isOpen, setOpen, isApplicationApplied, setApplicationApplied }: IModal) {

    const [error, setError] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(false);

    function cancelApplication() {
        setShowAlert(true);
        setOpen(!isOpen);
        setApplicationApplied(false);
    }

    function ConfirmApplication() {
        setShowAlert(true);
        setConfirmationModal(true);
        setApplicationApplied(true);
    }

    function closeModal() {
        setOpen(false);
        setConfirmationModal(false);
    }

    if (isOpen) {
        return (
            <Background>

                <ContainerModal>
                    <Close>
                        <CloseIcon onClick={() => closeModal()} fontSize="inherit" />
                    </Close>
                    <ContainerPhrase>Você concluiu a sua candidatura? </ContainerPhrase>
                    <ButtonContainer >
                        <DenyButton onClick={() => cancelApplication()}>Não</DenyButton>
                        <AffirmationButton onClick={() => ConfirmApplication()}>Sim</AffirmationButton>
                    </ButtonContainer >
                </ContainerModal>

                {confirmationModal === true ? (
                    <ConfirmeModal>
                        <Close>
                            <CloseIcon onClick={() => closeModal()} fontSize="inherit" />
                        </Close>
                        <ContainerPhrase>Sua candidatura foi registrada</ContainerPhrase>
                        <ConfirmationParagraph>Acompanhe os status de suas candidaturas em "Minhas candidaturas"</ConfirmationParagraph>
                        <img src={Confirme} alt="confirmation icon" />
                    </ConfirmeModal>
                ) : (
                    <></>
                )}
            </Background>
        )
    } else if (!isOpen && isApplicationApplied) {
        return (
            <AlertNotifications
                isShowAlert={showAlert}
                setShowAlert={setShowAlert}
                titleAlert="Sucesso"
                textAlert="Sua aplicação para a candidatura foi registrada."
                textColor="#083D07"
                backgroundColor="#C1F7C1"
                alertSeverityType="success"
            />
        )
    } else if (error) {
        return (
            <AlertNotifications
                isShowAlert={showAlert}
                setShowAlert={setShowAlert}
                titleAlert="Erro"
                textAlert="Seu registro de candidatura falhou. Tente novamente."
                textColor="#54010E"
                backgroundColor="#F6BEBE"
                alertSeverityType="error"
            />
        )
    } else {
        return (
            <AlertNotifications
                isShowAlert={showAlert}
                setShowAlert={setShowAlert}
                titleAlert="Candidatura não realizada"
                textAlert="Sua aplicação para a candidatura não foi registrada."
                textColor="#344054"
                backgroundColor="#F2F4F7"
                alertSeverityType="success"
            />
        )
    }
}