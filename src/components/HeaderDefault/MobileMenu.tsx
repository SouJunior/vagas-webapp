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
        className="absolute right-0 top-28 z-[1001] h-80 w-64 bg-white drop-shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        <div className="m-4 flex items-start justify-between">
          <button onClick={onClose} aria-label="Fechar menu" type="button">
            <img
              src={closeMenu}
              alt="Ícone de fechar menu"
              className="h-6 w-6"
            />
          </button>
          <MenuLinks isHomePage={isHomePage} onNavigate={onClose} />
        </div>
      </div>
      <div
        className="absolute z-30 h-full w-full backdrop-blur-md"
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
