import React from 'react';
import {
    Background,
    ContainerModal,
    ContainerPhrase,
    ButtonContainer,
    DenyButton,
    AffirmationButton
} from './styles';

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export default function Modal({ isOpen, setOpen}: IModal) {
    if(isOpen){
        return (
            <Background>
                <ContainerModal>
                    <ContainerPhrase>Você concluiu a sua candidatura? </ContainerPhrase>
                    <ButtonContainer >
                        <DenyButton onClick={() => setOpen(!isOpen)}>Não</DenyButton>
                        <AffirmationButton onClick={() => setOpen(!isOpen)}>Sim</AffirmationButton>
                    </ButtonContainer >
                </ContainerModal>
            </Background>
        )
    } else {
        return <></>
    }
}
