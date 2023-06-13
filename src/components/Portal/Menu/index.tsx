import { Container, MenuItems, PopUp, Border } from './styles';
import ProfileIcon from '../../../assets/imgs/profile.svg';
import NewJobIcon from '../../../assets/imgs/new-job.svg';
import ConfigIcon from '../../../assets/imgs/config.svg';
import TermsIcon from '../../../assets/imgs/terms.svg';
import ExitIcon from '../../../assets/imgs/exit.svg';
import PasswordIcon from '../../../assets/imgs/password.svg';
import UpArrowImage from '../../../assets/imgs/arrow-up.svg';
import DownArrowImage from '../../../assets/imgs/arrow-down.svg';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const auth: any = useContext(AuthContext);

    const [visible, setVisible] = useState(false);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/handle-profile');
    };

    return (
        <Container>
            <PopUp>
                <MenuItems>
                    <li onClick={handleNavigation}>
                        <img
                            src={ProfileIcon}
                            alt="perfil"
                        />
                        Meu perfil
                    </li>
                    <Border />
                    {auth.user.type !== 'USER' && (
                        <li
                            onClick={() => navigate('/insertjobs')}
                            className="jobs"
                        >
                            <img src={NewJobIcon} alt="vagas" />
                            Anunciar vagas
                        </li>
                    )}
                    <Border />
                    <li
                        onClick={() => {
                            setVisible(!visible);
                        }}
                    >
                        <img src={ConfigIcon} alt="configurações" />
                        <span>Configurações</span>
                        {visible ? (
                            <img src={UpArrowImage} alt="seta" />
                        ) : (
                            <img src={DownArrowImage} alt="seta" />
                        )}
                    </li>
                    {visible && (
                        <>
                            <Border />
                            <div>
                                <li>
                                    <img
                                        src={PasswordIcon}
                                        alt="alterar senha"
                                    />
                                    Alterar senha
                                </li>
                            </div>
                        </>
                    )}
                    <Border />
                    <li>
                        <img src={TermsIcon} alt="termos" />
                        Termo de uso e Privacidade
                    </li>
                    <Border />
                    <li onClick={() => navigate('/login')}>
                        {/* TODO: Excluir o token do localstorage ou cookie que armazena o token 
                            isso utilizando a função de logout que já está pronta em useApi.
                        */}
                            <img  src={ExitIcon} alt="sair" />
                            Sair do Portal de Vagas
                    </li>
                </MenuItems>
            </PopUp>
        </Container>
    );
};

export default Index;
