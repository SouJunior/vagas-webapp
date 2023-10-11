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
import { useNavigate, useLocation } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useEffect } from "react";


const ConfirmRegister = () => {
    
    const navigate = useNavigate();

    const api = useApi();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const type = searchParams.get("type");
    const id = searchParams.get("id");

    useEffect(() => {
        async function handleConfirmRegister() {
            if (id !== null) {
                if (type === "USER") {
                  await api.confirmRegisterCandidate(id)
                } else if (type === "COMPANY") {
                  await api.confirmRegisterCompany(id)
                }
            }
        }  
        handleConfirmRegister();
    }, []);

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
                Faça o seu Login e comece a explorar nosso Portal de Vagas
            </Text>
            <Button onClick={() => {navigate("/login")}}>
                Fazer Login
            </Button>
        </Container>
    )
}

export default ConfirmRegister