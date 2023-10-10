import {
    Container,
    Header,
    Logo,
    MainText,
    Icon,
    Text,
    Button,
} from "./styles/ConfirmRegisterStyles"
import LogoImage from '../assets/imgs/logotipo-icone-extendida.svg';
import { CheckCircle } from "@phosphor-icons/react";

const ConfirmRegister = () => {
    return (
        <Container>
            <Header>
                <Logo>
                    <img src={LogoImage} width="194px" alt="logo" />
                </Logo>
            </Header>
            <MainText>
                Seu e-mail foi validado com sucesso!
            </MainText>
            <Icon>
                <CheckCircle size={238} color="#096BCF" weight="fill" />
            </Icon>
            <Text>
                Faça o seu login e comece a explorar nosso Portal de Vagas
            </Text>
            <Button>
                Fazer Login
            </Button>
        </Container>
    )
}

export default ConfirmRegister