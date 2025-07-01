import ScrollToTopButton from '../ScrollToTopButton';
import SocialLinks from '../SocialLinks';
import FooterLinksSection from './FooterLinksSections';
import { institutionalLinks } from './Links/institutionalLinks';
import { channelLinks } from './Links/channelLinks';

const FooterDefault = () => (
    <footer className="w-full bg-white">
        <div
            className="flex flex-col flex-wrap justify-between my-6 mx-4
                            lg:flex-row lg:mx-8"
        >
            <div style={{ cursor: 'pointer' }}>
                <ScrollToTopButton />
            </div>
            <div
                className=" flex flex-col gap-8 my-6 mx-0                     
                                md:flex-row md:justify-end md:mt-6 md:mr-4 md:mb-8 md:ml-4
                                lg:gap-20 "
            >
                <FooterLinksSection
                    title="Institucional"
                    links={institutionalLinks}
                />
                <FooterLinksSection
                    title="Canais SouJunior"
                    links={channelLinks}
                />
                <FooterLinksSection title="Redes Sociais">
                    <SocialLinks />
                </FooterLinksSection>
            </div>
        </div>
    </footer>
);

export default FooterDefault;
