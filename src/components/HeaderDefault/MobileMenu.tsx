import closeMenu from '../../assets/imgs/x.svg';
import MenuLinks from './MenuLinks';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    isHomePage: boolean;
}

const MobileMenu = ({ isOpen, onClose, isHomePage }: MobileMenuProps) => {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="absolute top-28 right-0 bg-white drop-shadow-2xl w-64 h-80 z-[1001]"
                role="dialog"
                aria-modal="true"
            >
                <div className="flex items-start justify-between m-4">
                    <button
                        onClick={onClose}
                        aria-label="Fechar menu"
                        type="button"
                    >
                        <img
                            src={closeMenu}
                            alt="Ícone de fechar menu"
                            className="w-6 h-6"
                        />
                    </button>
                    <MenuLinks isHomePage={isHomePage} onNavigate={onClose} />
                </div>
            </div>
            <div
                className="w-full h-full z-30 absolute backdrop-blur-md"
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onClose();
                    }
                }}
                aria-label="Fechar menu"
                tabIndex={0}
                role="button"
            />
        </>
    );
};

export default MobileMenu;
