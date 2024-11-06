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

import { Box, Alert, AlertTitle, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Confirme from '../../assets/imgs/confirme.svg';

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    isApplicationApplied: boolean;
    setApplicationApplied: (isApplicationApplied: boolean) => void;
}

export default function Modal({ isOpen, setOpen, isApplicationApplied, setApplicationApplied }: IModal) {

    const [confirmationAlert, setConfirmationAlert] = useState(false);
    const [denialAlert, setDenialAlert] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(false);

    function cancelApplication() {
        setDenialAlert(true);
        setOpen(!isOpen);
    }

    function ConfirmApplication() {
        setConfirmationAlert(true);
        setConfirmationModal(true);
        setApplicationApplied(true);
    }

    function closeModal() {
        setOpen(false);
        setConfirmationModal(false);
        setConfirmationAlert(true);
        setApplicationApplied(true);
    }

    if (isOpen) {
        return (
            <div>

                <Background>


                    <ContainerModal>
                        <Close>
                            <CloseIcon onClick={() => setOpen(!isOpen)} fontSize="inherit" />
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
            </div>
        )
    } else if (!isOpen && isApplicationApplied) {
        return (
            <Box sx={{ width: "579px", height: "46px", display: "block", alignItems: "end" }}>
                <Box sx={{ marginTop: "8px", marginX: "5px", }}>
                    <Collapse in={confirmationAlert}>
                        <Alert severity="success">
                            <AlertTitle>Successo
                                <CloseIcon onClick={() => setConfirmationAlert(false)} fontSize="inherit" />
                            </AlertTitle>
                            Sua aplicação para a candidatura foi registrada.
                        </Alert>
                    </Collapse>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box sx={{ width: "579px", height: "46px", display: "block", alignItems: "end" }}>
                <Box sx={{ marginTop: "8px", marginX: "5px", }}>
                    <Collapse in={denialAlert}>
                        <Alert severity="success">
                            <AlertTitle>Successo
                                <CloseIcon onClick={() => setDenialAlert(false)} fontSize="inherit" />
                            </AlertTitle>
                            Sua aplicação para a candidatura não foi registrada.
                        </Alert>
                    </Collapse>
                </Box>
            </Box>
        )
    }
}