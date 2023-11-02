import { useEffect } from 'react';

interface PopupHandlerProps {
    setPopup: (value: boolean) => void;
    Popup: any;
}

const PopupHandler: React.FC<PopupHandlerProps> = ({ setPopup, Popup }) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setPopup(false);
        }
    };

    const handleOutsideClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (Popup && !target.closest(Popup)) {
            setPopup(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleKeyDown as EventListener);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener(
                'keydown',
                handleKeyDown as EventListener,
            );
        };
    }, [handleOutsideClick, handleKeyDown]);

    return null;
};

export default PopupHandler;
