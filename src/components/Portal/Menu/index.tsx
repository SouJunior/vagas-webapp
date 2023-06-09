import { Container, MenuItems, PopUp, Border } from "./styles"
import ProfileIcon from "../../../assets/imgs/profile.svg"
import NewJobIcon from "../../../assets/imgs/new-job.svg"
import ConfigIcon from "../../../assets/imgs/config.svg"
import TermsIcon from "../../../assets/imgs/terms.svg"
import ExitIcon from "../../../assets/imgs/exit.svg"
import PasswordIcon from "../../../assets/imgs/password.svg"
import UpArrowImage from "../../../assets/imgs/arrow-up.svg"
import DownArrowImage from "../../../assets/imgs/arrow-down.svg"
import { AuthContext } from "../../../contexts/Auth/AuthContext"
import { useContext, useState } from "react"

const Index = () => {

    const auth: any = useContext(AuthContext);

    const [visible, setVisible] = useState(false);

    return (
        <Container>
            <PopUp>
                <MenuItems>
                    <Border />
                    <li>
                        <a href="/">
                            {/* TODO: Vai redirecionar para a pagina de alteração
                                do perfil de usuário tipo empresa/candidato
                            */}
                            <img src={ProfileIcon} alt="perfil" />
                            Meu perfil
                        </a>
                    </li>
                    {(auth.user.type !== "USER") &&
                        <li>
                            <a href="insertjobs">
                                <img src={NewJobIcon} alt="vagas" />
                                Anunciar vagas
                            </a>
                        </li>
                    }
                    <Border />
                    <li onClick={() => { setVisible(!visible) }}>
                        <img src={ConfigIcon} alt="configurações" />
                        <span>Configurações</span>
                        {visible ? (<img src={UpArrowImage} alt="seta" />) :
                            (<img src={DownArrowImage} alt="seta" />)
                        }
                    </li>
                    {visible &&
                        <div>
                            <li>
                                <a href="/">
                                    <img src={PasswordIcon} alt="alterar senha" />
                                    Alterar senha
                                </a>
                            </li>
                        </div>
                    }
                    <Border />
                    <li>
                        <a href="/">
                            <img src={TermsIcon} alt="termos" />
                            Termo de uso e Privacidade
                        </a>
                    </li>
                    <Border />
                    <li>
                        {/* TODO: Excluir o token do localstorage ou cookie que armazena o token 
                            isso utilizando a função de logout que já está pronta em useApi.
                        */}
                        <a href="login">
                            <img src={ExitIcon} alt="sair" />
                            Sair do Portal de Vagas
                        </a>
                    </li>
                </MenuItems>
            </PopUp>
        </Container>
    )
}

export default Index