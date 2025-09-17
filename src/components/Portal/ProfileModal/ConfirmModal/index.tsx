import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import ModalIcon from '../../../../assets/imgs/mask-group.svg';
import { AuthContext } from '../../../../contexts/Auth/AuthContext';
import { MaskBackground } from '../../../LoginCard/PopUpRegisterSuccess/styles';
import {
  CloseModal,
  ModalCloseButton,
  ModalContent,
  ModalText,
  ModalTitle,
} from './styles';

interface ConfirmModalProps {
  setConfirmModal: (value: boolean) => void;
}

const ConfirmModal = ({ setConfirmModal }: ConfirmModalProps) => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setConfirmModal(false);
    if (auth.user.type === 'USER') {
      navigate('/candidate-portal');
    } else {
      navigate('/company-portal');
    }
    setTimeout(() => window.location.reload(), 0);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        modalRef.current &&
        e.target instanceof Node &&
        !modalRef.current.contains(e.target)
      ) {
        setConfirmModal(false);
        handleClick();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <MaskBackground>
      <ModalContent ref={modalRef}>
        <CloseModal>
          <ModalCloseButton
            /**
             * @see https://developer.mozilla.org/pt-BR/docs/Web/API/Location/reload
             */
            onClick={handleClick}
          >
            X
          </ModalCloseButton>
        </CloseModal>
        <div className="modal--texts">
          <ModalTitle>Atualizações salvas</ModalTitle>
          <ModalText>Suas atualizações foram alteradas com sucesso!</ModalText>
          <img src={ModalIcon} alt="Sucesso" />
        </div>
      </ModalContent>
    </MaskBackground>
  );
};

export default ConfirmModal;
