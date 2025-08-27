import logoSouJunior from '../assets/imgs/Logotipo-SouJunior.svg';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    // Check if the key pressed is 'Enter' or 'Space'
    if (event.key === 'Enter' || event.key === ' ') {
      handleScrollToTop();
    }
  };

  return (
    <button onClick={handleScrollToTop} onKeyDown={handleKeyPress} tabIndex={0}>
      <img src={logoSouJunior} className="w-48 lg:w-[248px]" alt="logo" />
    </button>
  );
};

export default ScrollToTopButton;
