import popup from '../../../assets/imgs/popup-cadastro-concluido.svg';
import close from '../../../assets/imgs/popup-cadastro-close.svg';

import { MaskBackground, Popup } from './styles';

export const PopUpRegisterSucess = (props: any): JSX.Element => {
    return (
        <MaskBackground>
            <Popup>
                <button onClick={props.close}>
                    <img className="close" src={close} alt="botão fechar" />
                </button>
                <img className="email" src={popup} alt="Email checked" />
                <h2>Cadastro concluído com sucesso!</h2>
                <p>
                    Enviamos um link de validação para o e-mail "{props.email}".
                    Verifique sua caixa de entrada para fazer o login.
                </p>
            </Popup>
        </MaskBackground>
    );
};
