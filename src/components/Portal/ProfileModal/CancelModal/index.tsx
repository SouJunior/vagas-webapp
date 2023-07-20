import { useNavigate } from 'react-router';
import {
    ModalContent,
    ModalTitle,
    ModalText,
    ButtonContent,
} from './styles';
import { Button } from '../../../Button';
import { MaskBackground } from '../../../LoginCard/PopUpRegisterSuccess/styles';
import { AuthContext } from '../../../../contexts/Auth/AuthContext';
import { useContext } from 'react';
import { useApi } from '../../../../hooks/useApi';

interface CancelModalProps {
    setCancelModal: (value: boolean) => void;
    fileKey1?: string;
    fileKey2?: string;
}

function CancelModal({
    setCancelModal,
    fileKey1,
    fileKey2,
}: CancelModalProps) {

    const navigate = useNavigate()
    const auth = useContext(AuthContext);
    const api = useApi();

    const handleConfirmButton = async () => {
        console.log(fileKey1)
        try {
            if (fileKey1) {
                await api.deleteUserCurriculum(fileKey1);   
            }

            if (fileKey2) {
                await api.deleteUserCurriculum(fileKey2);  
            }

            auth.user.type === 'USER' ?
            (navigate('/candidate-portal'))
            :
            (navigate('/company-portal'))
        document.body.style.overflow = 'auto';

        } catch (error) {
            //TODO ver mensagem de erro para o usuário
        };
    }

    return (
        <MaskBackground>
            <ModalContent>
                <ModalTitle>Deseja cancelar?</ModalTitle>
                <ModalText>
                    Tem certeza que deseja cancelar a operação?
                </ModalText>
                <ButtonContent>
                    <Button
                        onClick={handleConfirmButton}
                    >
                        Sim
                    </Button>
                    <Button background='outline' onClick={() => {
                        document.body.style.overflow = 'auto';
                        setCancelModal(false)
                    }}>
                        Não
                    </Button>
                </ButtonContent>
            </ModalContent>
        </MaskBackground >
    );
}

export default CancelModal;
