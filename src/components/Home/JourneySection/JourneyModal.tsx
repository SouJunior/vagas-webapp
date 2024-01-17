import { ReactElement } from 'react';
import {
    CloseButton,
    JourneyModalContent,
    JourneyModalDescription,
    JourneyModalTitle,
    JourneyModalWrapper,
} from './styles';
import { AiOutlineClose } from 'react-icons/ai';

interface JourneyModalProps {
    onClose: () => void;
    Title: string;
    Content: ReactElement;
}

const JourneyModal: React.FC<JourneyModalProps> = (props) => {
    return (
        <JourneyModalWrapper onClick={props.onClose}>
            <JourneyModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={props.onClose}>
                    <AiOutlineClose />
                </CloseButton>
                <JourneyModalTitle>{props.Title}</JourneyModalTitle>
                <JourneyModalDescription>
                    {props.Content}
                </JourneyModalDescription>
            </JourneyModalContent>
        </JourneyModalWrapper>
    );
};

export default JourneyModal;
