import { useNavigate } from 'react-router';
import {
    ModalContent,
    ModalTitle,
    ModalText,
    ButtonContent,
} from './styles';
import { Button } from '../../../Button';
import { MaskBackground } from '../../../LoginCard/PopUpRegisterSuccess/styles';

interface CancelModalProps {
    setCancelModal: (value: boolean) => void;
}

function CancelModal({
    setCancelModal
}: CancelModalProps) {

    const navigate = useNavigate()
    return (
        <MaskBackground>
            <ModalContent>
                <ModalTitle>Deseja Cancelar ?</ModalTitle>
                <ModalText>
                    Tem certeza que deseja cancelar a operação ?
                </ModalText>
                <ButtonContent>
                    <Button onClick={() => {
                        document.body.style.overflow = 'auto';
                        navigate('/company-portal')}}>
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
        </MaskBackground>
    );
}

export default CancelModal;
