import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../validations';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
    MessageError,
    Container,
    Card,
    LoginTypeButton,
    Title,
    Divider,
    InputContainer,
    IconWrapper,
    Input,
    Label,
    CheckboxInput,
    CheckboxContainer,
    SecondDivider,
    ButtonContainer,
    LoginButton,
    RegisterButton,
    DivLogo,
    RegisterSubmitButton,
    TermsLink,
    LoginLink,
    Form,
    MessageError2,
} from './styles';
import EmpresaIcon from '../../assets/imgs/Buildings-icone.svg';
import CandidatoIcon from '../../assets/imgs/Candidato-icone.svg';

import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';

const PasswordIcon = () => {
    return (
        <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.9067 0.830078C6.07607 0.830078 1.9507 3.94008 0.279297 8.33008C1.9507 12.7201 6.07607 15.8301 10.9067 15.8301C15.7422 15.8301 19.8627 12.7201 21.5341 8.33008C19.8627 3.94008 15.7422 0.830078 10.9067 0.830078ZM10.9067 13.3301C8.2402 13.3301 6.07607 11.0901 6.07607 8.33008C6.07607 5.57008 8.2402 3.33008 10.9067 3.33008C13.5732 3.33008 15.7374 5.57008 15.7374 8.33008C15.7374 11.0901 13.5732 13.3301 10.9067 13.3301ZM10.9067 5.33008C9.30777 5.33008 8.00833 6.67508 8.00833 8.33008C8.00833 9.98508 9.30777 11.3301 10.9067 11.3301C12.5057 11.3301 13.8051 9.98508 13.8051 8.33008C13.8051 6.67508 12.5057 5.33008 10.9067 5.33008Z"
                fill="#D7D9D7"
            />
        </svg>
    );
};
const LogoIcon = () => {
    return (
        <svg
            width="72"
            height="71"
            viewBox="0 0 72 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.1292 49.583H5.50242C3.0158 49.583 1 51.5778 1 54.0385V65.5442C1 68.0049 3.0158 69.9997 5.50242 69.9997H17.1292C19.6158 69.9997 21.6316 68.0049 21.6316 65.5442V54.0385C21.6316 51.5778 19.6158 49.583 17.1292 49.583Z"
                fill="#1165BA"
            />
            <path
                d="M40.8695 24.792H29.658C27.2602 24.792 25.3164 26.7868 25.3164 29.2475V40.7532C25.3164 43.2139 27.2602 45.2087 29.658 45.2087H40.8695C43.2673 45.2087 45.2111 43.2139 45.2111 40.7532V29.2475C45.2111 26.7868 43.2673 24.792 40.8695 24.792Z"
                fill="#1165BA"
            />
            <path
                d="M30.5552 0.5H42.1819C44.3973 0.5 46.1843 2.27588 46.1843 4.45554V15.9612C46.1843 18.1409 44.3973 19.9167 42.1819 19.9167H30.5552C28.3397 19.9167 26.5527 18.1409 26.5527 15.9612V4.45554C26.5527 2.27588 28.3397 0.5 30.5552 0.5Z"
                stroke="#1165BA"
            />
            <path
                d="M40.8695 49.583H29.658C27.2602 49.583 25.3164 51.5778 25.3164 54.0385V65.5442C25.3164 68.0049 27.2602 69.9997 29.658 69.9997H40.8695C43.2673 69.9997 45.2111 68.0049 45.2111 65.5442V54.0385C45.2111 51.5778 43.2673 49.583 40.8695 49.583Z"
                stroke="#1165BA"
                strokeMiterlimit="10"
            />
            <path
                d="M66.4973 24.792H54.8706C52.384 24.792 50.3682 26.7868 50.3682 29.2475V40.7532C50.3682 43.2139 52.384 45.2087 54.8706 45.2087H66.4973C68.9839 45.2087 70.9997 43.2139 70.9997 40.7532V29.2475C70.9997 26.7868 68.9839 24.792 66.4973 24.792Z"
                stroke="#1165BA"
                strokeMiterlimit="10"
            />
            <path
                d="M17.1292 24.792H5.50242C3.0158 24.792 1 26.7868 1 29.2475V40.7532C1 43.2139 3.0158 45.2087 5.50242 45.2087H17.1292C19.6158 45.2087 21.6316 43.2139 21.6316 40.7532V29.2475C21.6316 26.7868 19.6158 24.792 17.1292 24.792Z"
                stroke="#1165BA"
                strokeMiterlimit="10"
            />
            <path
                d="M66.6586 0H55.4471C53.0493 0 51.1055 1.99481 51.1055 4.45554V15.9612C51.1055 18.4219 53.0493 20.4167 55.4471 20.4167H66.6586C69.0564 20.4167 71.0002 18.4219 71.0002 15.9612V4.45554C71.0002 1.99481 69.0564 0 66.6586 0Z"
                fill="#1165BA"
            />
        </svg>
    );
};
const EmailIcon = () => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.523375 6.7108L10.9262 0.4738C11.1011 0.368893 11.3012 0.313477 11.5051 0.313477C11.709 0.313477 11.909 0.368893 12.0839 0.4738L22.4766 6.71192C22.56 6.76189 22.629 6.83261 22.6769 6.9172C22.7248 7.00178 22.75 7.09734 22.75 7.19455V21.5001C22.75 21.7984 22.6315 22.0846 22.4205 22.2955C22.2095 22.5065 21.9234 22.6251 21.625 22.6251H1.375C1.07663 22.6251 0.790483 22.5065 0.579505 22.2955C0.368526 22.0846 0.25 21.7984 0.25 21.5001V7.19342C0.24998 7.09621 0.275153 7.00066 0.323064 6.91607C0.370975 6.83149 0.439989 6.76077 0.523375 6.7108ZM18.6393 8.27455L11.5686 14.3934L4.35287 8.2678L2.89713 9.9823L11.5821 17.3567L20.1107 9.97668L18.6393 8.27455V8.27455Z"
                fill="#D7D9D7"
            />
        </svg>
    );
};

const LoginCard = () => {
    const [isFieldsValid, setIsFieldsValid] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const api = useApi();
    const auth: any = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(formSchema),
    });

    const compareEmailAndData = (data: any) => {
        if (data.user.email !== email) {
            setHasError(true);
        }
    };

    async function handleFormOnSubmit() {
        setIsFormSubmitted(true);
        const data = await api.login(email, password);
        const isLogged = await auth.login(email, password);

        // confere se existe usuário e se está logado
        try {
            // TODO: confirmar se a verificação dos campos e sua resposta
            // se senha e usuário serão válidas irá
            // vir do backend ou será feita no frontend, ou ambos
            compareEmailAndData(data);

            if (email && password && isLogged) {
                navigate('/InsertJobs');
            }
        } catch (err) {
            setHasError(data);
        }
    }
    // const isFormValid = Object.keys(formState.errors).length === 0;
    async function handleRegisterSubmit() {
        console.log(
            registerCheck[0],
            registerCheck[1],
            registerCheck[2],
            registerCheck[3],
        );
        const registerData = await auth.register(
            registerCheck[0],
            registerCheck[1],
            registerCheck[2],
            registerCheck[3],
        );

        if (!registerData) {
            setIsLogin(true);
        }
    }
    // monitora os campos email e password enquanto são preenchidos
    const checkFilling = watch(['email', 'password']);
    const registerCheck = watch([
        'registerName',
        'registerEmail',
        'registerPassword',
        'registerCnpj',
    ]);

    // verifica se os campos preenchidos são válidos
    formSchema
        .isValid({ email: checkFilling[0], password: checkFilling[1] })
        .then((valid) => {
            if (valid) setIsFieldsValid(true);
            else {
                if (isFieldsValid) setIsFieldsValid(false);
            }
        });

    return (
        <Container>
            <Card>
                <LoginTypeButton>
                    <button>
                        <img src={EmpresaIcon} alt="Empresa" />
                        Empresa
                    </button>
                    <button>
                        <img src={CandidatoIcon} alt="Candidato" />
                        Candidato
                    </button>
                </LoginTypeButton>

                <DivLogo
                    style={{
                        marginBottom: isLogin ? '42px' : '18px',
                        marginTop: isLogin ? '22px' : '8px',
                    }}
                >
                    <LogoIcon />
                </DivLogo>

                {isLogin ? (
                    <Title>Entrar</Title>
                ) : (
                    <Title>Cadastro de empresa</Title>
                )}

                <Divider style={{ marginBottom: isLogin ? '32px' : '20px' }} />

                {isLogin ? (
                    <Form
                        id="login-form"
                        onSubmit={handleSubmit(handleFormOnSubmit)}
                    >
                        <InputContainer>
                            <div>
                                <Input
                                    type="text"
                                    {...register('email', {
                                        onChange: (e) =>
                                            setEmail(e.target.value),
                                    })}
                                    placeholder="E-mail"
                                    aria-label="Email"
                                />
                                <IconWrapper>
                                    <EmailIcon />
                                </IconWrapper>
                            </div>
                            <MessageError>
                                {errors.email && <>{errors.email.message}</>}
                            </MessageError>
                        </InputContainer>
                        <InputContainer>
                            <div>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', {
                                        onChange: (e) =>
                                            setPassword(e.target.value),
                                    })}
                                    placeholder="Senha"
                                    aria-label="Senha"
                                />
                                <IconWrapper
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    style={{ cursor: 'pointer' }}
                                >
                                    <PasswordIcon />
                                </IconWrapper>
                            </div>

                            <MessageError>
                                {errors.password && (
                                    <>{errors.password.message}</>
                                )}
                            </MessageError>
                        </InputContainer>
                        <InputContainer>
                            <CheckboxContainer>
                                <Label>
                                    {/* TODO: monitorar também o valor deste campo, pois será enviado à API */}
                                    <CheckboxInput
                                        id="default-checkbox"
                                        value=""
                                    />
                                    Me mantenha conectado
                                </Label>
                                <a href="/">Esqueci minha senha</a>
                            </CheckboxContainer>
                        </InputContainer>

                        <SecondDivider />

                        <ButtonContainer>
                            <LoginButton
                                type="submit"
                                id="submit-button"
                                disabled={false}
                            >
                                Entrar
                            </LoginButton>

                            <RegisterButton onClick={() => setIsLogin(false)}>
                                Criar conta
                            </RegisterButton>
                        </ButtonContainer>
                    </Form>
                ) : (
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <InputContainer>
                            <Input
                                type="text"
                                {...register('registerName')}
                                placeholder="Nome da empresa"
                                aria-label="Nome da empresa"
                            ></Input>
                            <MessageError>
                                {errors.registerName && (
                                    <>{errors.registerName.message}</>
                                )}
                            </MessageError>
                        </InputContainer>
                        <InputContainer>
                            <Input
                                type="text"
                                {...register('registerCnpj')}
                                placeholder="CNPJ da empresa"
                                aria-label="CNPJ da empresa"
                            ></Input>
                            <MessageError>
                                {errors.registerCnpj && (
                                    <>{errors.registerCnpj.message}</>
                                )}
                            </MessageError>
                        </InputContainer>
                        <InputContainer>
                            <div>
                                <Input
                                    type="text"
                                    {...register('registerEmail')}
                                    placeholder="E-mail"
                                    aria-label="Email"
                                ></Input>
                                <IconWrapper>
                                    <EmailIcon />
                                </IconWrapper>
                            </div>
                            <MessageError>
                                {errors.registerEmail && (
                                    <>{errors.registerEmail.message}</>
                                )}
                            </MessageError>
                        </InputContainer>
                        <InputContainer>
                            <div>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('registerPassword')}
                                    placeholder="Senha"
                                    aria-label="Senha"
                                />
                                <IconWrapper
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    style={{ cursor: 'pointer' }}
                                >
                                    <PasswordIcon />
                                </IconWrapper>
                            </div>
                            <MessageError>
                                {errors.registerPassword && (
                                    <>{errors.registerPassword.message}</>
                                )}
                            </MessageError>
                        </InputContainer>
                        <InputContainer>
                            <div>
                                <Input
                                    type={
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    {...register('confirmPassword')}
                                    placeholder="Confirme sua senha"
                                    aria-label="Senha"
                                />
                                <IconWrapper
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword,
                                        )
                                    }
                                    style={{ cursor: 'pointer' }}
                                >
                                    <PasswordIcon />
                                </IconWrapper>
                            </div>
                            <MessageError>
                                {errors.confirmPassword && (
                                    <>{errors.confirmPassword.message}</>
                                )}
                            </MessageError>
                        </InputContainer>
                        <InputContainer>
                            <Label>
                                <CheckboxInput {...register('privacyTerms')} />
                                <TermsLink>
                                    Li e aceito os <a href="/">Termos de Uso</a>{' '}
                                    e <a href="/">Política de Privacidade</a>
                                </TermsLink>
                            </Label>
                            <MessageError2>
                                {errors.privacyTerms && (
                                    <>{errors.privacyTerms.message}</>
                                )}
                            </MessageError2>
                        </InputContainer>

                        <RegisterSubmitButton
                            type="submit"
                            id="register-submit-button"
                            disabled={false}
                            onClick={handleRegisterSubmit}
                        >
                            Criar conta
                        </RegisterSubmitButton>
                        <LoginLink>
                            Já tem conta?{' '}
                            <button onClick={() => setIsLogin(true)}>
                                Faça o Login
                            </button>
                        </LoginLink>
                    </Form>
                )}
            </Card>
            <ToastContainer />
        </Container>
    );
};

export default LoginCard;
