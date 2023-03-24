import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schemaValidationLoginForm } from '../../../validations/loginValidations';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../../hooks/useApi';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

import {
    MessageError,
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
    Form,
    Title,
    Divider,
} from '../styles';
import { toast } from 'react-toastify';
import { RegisterCompany } from '../RegisterCompany';

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

export const LoginCompany = (props: any): JSX.Element => {
    const [isLogin, setIsLogin] = useState(true);

    const [isFieldsValid, setIsFieldsValid] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const api = useApi();
    const auth: any = useContext(AuthContext);
    const companyType = props.type;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schemaValidationLoginForm),
    });

    const compareEmailAndData = (data: any) => {
        if (data !== email) {
            setHasError(true);
        }
    };

    async function handleFormOnSubmit() {
        setIsFormSubmitted(true);
        const data = await api.login(email, password, companyType);
        // Vai receber os dados do contexto para verificação
        const isLogged = await auth.login(email, password, companyType);

        // confere se existe usuário e se está logado
        try {
            compareEmailAndData(data.info.email);

            toast.success(
                `Login efetuado com sucesso ${data.info.companyName}!`,
                {
                    position: 'top-right',
                    theme: 'light',
                },
            );
            if (email && password && isLogged) {
                navigate('/insertjob');
            }
        } catch (err) {
            // TODO: Tratar os erros com as mensagens do backend
            setHasError(data);
        }
    }

    // monitora os campos email e password enquanto são preenchidos
    const checkFilling = watch(['email', 'password']);

    // verifica se os campos preenchidos são válidos
    schemaValidationLoginForm
        .isValid({ email: checkFilling[0], password: checkFilling[1] })
        .then((valid) => {
            if (valid) setIsFieldsValid(true);
            else {
                if (isFieldsValid) setIsFieldsValid(false);
            }
        });

    return (
        <>
            {isLogin ? (
                <Title>Empresa</Title>
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
                                    onChange: (e) => setEmail(e.target.value),
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
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: 'pointer' }}
                            >
                                <PasswordIcon />
                            </IconWrapper>
                        </div>

                        <MessageError>
                            {errors.password && <>{errors.password.message}</>}
                        </MessageError>
                    </InputContainer>
                    <InputContainer>
                        <CheckboxContainer>
                            <Label>
                                {/* TODO: monitorar também o valor deste campo, pois será enviado à API */}
                                <CheckboxInput id="default-checkbox" value="" />
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
                <RegisterCompany />
            )}
        </>
    );
};
