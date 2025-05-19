import {
    Header,
    HeaderNavigation,
    ListItem,
    HireJuniorsSection,
    Container,
    HireTitle,
    HireDescription,
    ButtonRegister,
    Image,
    HeaderWrapper,
    HireSectionWrapper,
} from '../styles/HomeCompaniesStyles';

import Logo from '../../assets/imgs/soujunior-empresas.png';
import HireImage from '../../assets/imgs/companies.png';
export default function Companies() {
    return (
        <>
            <Header>
                <Container>
                    <HeaderWrapper>
                        <img src={Logo} alt="Sou Junior empresas" />
                        <nav aria-label="navegação principal">
                            <HeaderNavigation>
                                <ListItem>
                                    <a href="/">Home</a>
                                </ListItem>
                                <ListItem>
                                    <a href="#">Sobre nós</a>
                                </ListItem>
                            </HeaderNavigation>
                        </nav>{' '}
                    </HeaderWrapper>
                </Container>
            </Header>

            <HireJuniorsSection>
                <Container>
                    <HireSectionWrapper>
                        <div>
                            <HireTitle>Contrate Juniores!</HireTitle>
                            <HireDescription>
                                Encontre talentos iniciantes prontos para
                                crescer com sua empresa.
                            </HireDescription>

                            <ButtonRegister>
                                Cadastre sua empresa
                            </ButtonRegister>
                        </div>

                        <Image
                            src={HireImage}
                            alt="Ilustração da seção de contratação"
                        />
                    </HireSectionWrapper>
                </Container>
            </HireJuniorsSection>
        </>
    );
}
