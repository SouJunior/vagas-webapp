import React, { useState } from 'react';
import LogoImage from '../../assets/imgs/logotipo-icone-extendida.svg';
import {
    Container,
    Background,
    ModalWrapper,
    ModalHead,
    ModalColumn,
    ModalRow,
    Option,
    ButtonsWrapper,
    Btn,
    Success
} from './styles';
import ProfileDefault from '../../assets/imgs/profile-image.svg';

interface Props {
    title: string;
    onClose: Function;
}

function EndJobModal({ title, onClose }: Props) {
    const [success, setSuccess] = useState(false);
    
    const finishJob = () => {
        setSuccess(true)

        setTimeout(() => {
            onClose();
        }, 3000)
    }

    return (
        <Container>
            <Background onClick={() => onClose()} />
            <ModalWrapper>
                <ModalHead>
                    <img
                        src={LogoImage}
                        alt="Logotipo-estendida-com-ícone-da-SouJunior"
                    />
                </ModalHead>
                {success ? (
                    <Success>Vaga cancelada com sucesso!</Success>
                ) : (
                    <ModalRow>
                        <ModalColumn>
                            <img src={ProfileDefault} />
                        </ModalColumn>
                        <ModalColumn>
                            <h2>Qual o motivo de encerramento da vaga?</h2>
                            <h2 className="job-title">{title}</h2>

                            <form>
                                <Option>
                                    <input type="radio" />
                                    <p>Achei o candidato pela SouJunior</p>
                                </Option>
                                <Option>
                                    <input type="radio" />
                                    <p>Achei o candidato em outra plataforma</p>
                                </Option>
                                <Option>
                                    <input type="radio" />
                                    <p>
                                        A empresa desistiu de contratar nesse
                                        momento
                                    </p>
                                </Option>
                            </form>

                            <ButtonsWrapper>
                                <Btn type="confirm" onClick={() => finishJob()}>Confirmar</Btn>
                                <Btn type="cancel" onClick={() => onClose()}>
                                    Cancelar
                                </Btn>
                            </ButtonsWrapper>
                        </ModalColumn>
                    </ModalRow>
                )}
            </ModalWrapper>
        </Container>
    );
}

export default EndJobModal;
