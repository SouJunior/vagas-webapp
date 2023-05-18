import { Container, MenuItems, PopUp, Border } from "./styles"
import ProfileIcon from "../../../assets/imgs/profile.svg"
import NewJobIcon from "../../../assets/imgs/new-job.svg"
import ConfigIcon from "../../../assets/imgs/config.svg"
import TermsIcon from "../../../assets/imgs/terms.svg"
import ExitIcon from "../../../assets/imgs/exit.svg"
import PasswordIcon from "../../../assets/imgs/password.svg"

const index = () => {
    return (
        <Container>
            <PopUp>
                <MenuItems>
                    <Border />
                    <li>
                        <img src={ProfileIcon} alt="perfil" />
                        Meu perfil
                    </li>
                    <li>
                        <img src={NewJobIcon} alt="vagas" />
                        Anunciar vagas
                    </li>
                    <Border />
                    <li>
                        <img src={ConfigIcon} alt="configurações" />
                        Configurações
                    </li>
                    <li>
                        <img src={PasswordIcon} alt="alterar senha" />
                        Alterar senha
                    </li>
                    <Border />
                    <li>
                        <img src={TermsIcon} alt="termos" />
                        Termo de uso e Privacidade
                    </li>
                    <Border />
                    <li>
                        <img src={ExitIcon} alt="sair" />
                        Sair do Portal de Vagas
                    </li>
                </MenuItems>
            </PopUp>
        </Container>
    )
}

export default index