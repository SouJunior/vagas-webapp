import { useEffect, useRef } from 'react';
import { ModalContent, ModalTitle, ModalText, ModalCloseButton, CloseModal, MaskBackground } from './styles';

interface VacanciesModalProps {
    setVacanciesModal: (value: boolean) => void;
}

function VacanciesModal({ setVacanciesModal }: VacanciesModalProps) {

    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
        if (modalRef.current && e.target instanceof Node && !modalRef.current.contains(e.target)) {
            setVacanciesModal(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
        
    return (
        <MaskBackground>
            <ModalContent ref={modalRef}> 
                <CloseModal> 
                    <ModalCloseButton onClick={() => setVacanciesModal(false)}>
                        X
                    </ModalCloseButton>
                </CloseModal>
                <div>
                    <ModalTitle>A vaga ficará disponível por 7 dias.</ModalTitle>
                    <ModalText>Depois desse período, será removida automaticamente.</ModalText>
                </div>
            </ModalContent>
        </MaskBackground>
    );
}

export default VacanciesModal;
