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
        setApplicationApplied(false);
    }

    function ConfirmApplication() {
        setConfirmationAlert(true);
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
            <Box sx={{ minWidth: "635px", position: "fixed", top: "1%", left: "56%" }}>
                <Collapse in={confirmationAlert}>
                    <Box sx={{
                        marginTop: "2px",
                        display: "flex",
                        minWidth: "100%"
                    }}>
                        <Alert severity="success" sx={{
                            display: "flex",
                            minWidth: "100%",
                            justifyContent: "flex-start",
                            marginLeft: "2px",
                            marginRight: "30px",
                            color: "#083D07",
                            backgroundColor: "#C1F7C1",
                            fontFamily: 'Radio Canada',
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "22.4px"
                        }}>
                            <AlertTitle sx={{ fontFamily: 'Radio Canada', fontSize: "20px", fontWeight: "500", lineHeight: "24px" }}>Sucesso</AlertTitle>
                            Sua aplicação para a candidatura foi registrada.
                        </Alert>
                    </Box>
                    <CloseIcon onClick={() => setConfirmationAlert(false)} fontSize="inherit"
                        sx={{
                            width: "24px",
                            height: "24px",
                            marginLeft: "50px",
                            position: "relative",
                            bottom: "50%",
                            left: "88%",
                            color: "#083D07"
                        }} />
                </Collapse>
            </Box>
        )
    } else {
        return (
            <Box sx={{ minWidth: "635px", minHeight: "62px", position: "fixed", top: "1%", left: "56%" }}>
                <Collapse in={denialAlert}>
                    <Box sx={{
                        marginTop: "2px",
                        display: "flex",
                        minWidth: "100%"
                    }}>
                        <Alert severity="success" sx={{
                            display: "flex",
                            minWidth: "100%",
                            justifyContent: "flex-start",
                            marginLeft: "2px",
                            marginRight: "30px",
                            color: "#083D07",
                            backgroundColor: "#C1F7C1",
                            fontFamily: 'Radio Canada',
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "22.4px"
                        }}>
                            <AlertTitle sx={{ fontFamily: 'Radio Canada', fontSize: "20px", fontWeight: "500", lineHeight: "24px" }}>Sucesso</AlertTitle>
                            Sua aplicação para a candidatura não foi registrada.
                        </Alert>
                    </Box>
                    <CloseIcon onClick={() => setDenialAlert(false)} fontSize="inherit"
                        sx={{
                            width: "24px",
                            height: "24px",
                            marginLeft: "50px",
                            position: "relative",
                            bottom: "50%",
                            left: "88%",
                            color: "#083D07"
                        }} />
                </Collapse>
            </Box>
        )
    }
}