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

import { Box, Alert, AlertTitle, Button, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Confirme from '../../assets/imgs/confirme.svg';

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    isAlert: boolean;
    setAlert: (isOpen: boolean) => void;
}

export default function Modal({ isOpen, setOpen, isAlert, setAlert }: IModal) {

    const [sim, setSim] = useState(false);
    const [not, setNot] = useState(false);
    const [teste, setTeste] = useState(false);

    function cancelApplication() {
        setNot(true);
        setOpen(!isOpen);
        setAlert(true);
    }

    function ConfirmApplication() {
        setSim(true);
        setTeste(true);
    }

    function closeModal() {
        setOpen(false);
        setTeste(false);
        setSim(false);
    }

    if (isOpen) {
        return (
            <div>

                <Background>
                    <Box sx={{ width: "579px", height: "46px", display: "block", alignItems: "end" }}>
                        <Box sx={{ marginTop: "8px", marginX: "5px", }}>
                            <Collapse in={sim}>
                                <Alert severity="success">
                                    <AlertTitle>Successo
                                        <CloseIcon onClick={() => setSim(false)} fontSize="inherit" />
                                    </AlertTitle>
                                    Sua aplicação para a candidatura foi registrada.
                                </Alert>
                            </Collapse>
                        </Box>
                    </Box>

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

                    {teste === true ? (
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
    } else if (!isOpen && isAlert) {
        return (
            <Box sx={{ width: "579px", height: "46px", display: "block", alignItems: "end" }}>
                <Box sx={{ marginTop: "8px", marginX: "5px", }}>
                    <Collapse in={not}>
                        <Alert severity="success">
                            <AlertTitle>Successo
                                <CloseIcon onClick={() => setNot(false)} fontSize="inherit" />
                            </AlertTitle>
                            Sua aplicação para a candidatura não foi registrada.
                        </Alert>
                    </Collapse>
                </Box>
            </Box>
        )
    }
    else {
        return <></>
    }
}
