import { ReactElement } from 'react';
import {
    ModalTitle,
    CloseButton,
    ModalContent,
    ModalWrapper,
    ModalDescriptions,
    ModalSource,
} from './styles';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalAreasProps {
    title: string;
    description: ReactElement;
    source: string;
    onClose: () => void;
}

const ModalAreas = (props: ModalAreasProps) => {
    return (
        <ModalWrapper onClick={props.onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalTitle>{props.title}</ModalTitle>
                <CloseButton onClick={props.onClose}>
                    <AiOutlineClose />
                </CloseButton>
                <ModalDescriptions>{props.description}</ModalDescriptions>
                <ModalSource>
                    Fonte: <a href={props.source}>{props.source}</a>
                </ModalSource>
            </ModalContent>
        </ModalWrapper>
    );
};

export default ModalAreas;
