import React from 'react';
import {
    Button,
    ButtonContainer,
    DialogBox,
    DialogContainer,
    DialogHeader,
    DialogOverlay,
} from './styles';

const Modal = ({
    handleCancel,
    title,
    children,
    handleConfirm,
    confirmText,
    cancelText,
    buttonColors,
}: any) => {
    return (
        <DialogContainer>
            <DialogOverlay onClick={handleCancel} />
            <DialogBox>
                <DialogHeader>
                    <div>{title}</div>
                </DialogHeader>
                <p>{children}</p>
                <ButtonContainer>
                    <Button
                        onClick={handleCancel}
                        buttonColors={buttonColors.cancelButton}
                    >
                        {cancelText}
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        buttonColors={buttonColors.confirmButton}
                    >
                        {confirmText}
                    </Button>
                </ButtonContainer>
            </DialogBox>
        </DialogContainer>
    );
};

export default Modal;
