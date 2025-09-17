import ScrollToTopButton from '../ScrollToTopButton';
import SocialLinks from '../SocialLinks';
import FooterLinksSection from './FooterLinksSections';
import { institutionalLinks } from './Links/institutionalLinks';
import { channelLinks } from './Links/channelLinks';

const FooterDefault = () => (
  <footer className="w-full bg-white">
    <div className="mx-4 my-6 flex flex-col flex-wrap justify-between lg:mx-8 lg:flex-row">
      <div style={{ cursor: 'pointer' }}>
        <ScrollToTopButton />
      </div>
      <div className="mx-0 my-6 flex flex-col gap-8 md:mb-8 md:ml-4 md:mr-4 md:mt-6 md:flex-row md:justify-end lg:gap-20">
        <FooterLinksSection title="Institucional" links={institutionalLinks} />
        <FooterLinksSection title="Canais SouJunior" links={channelLinks} />
        <FooterLinksSection title="Redes Sociais">
          <SocialLinks />
        </FooterLinksSection>
      </div>
    </div>
  </footer>
);

export default FooterDefault;
