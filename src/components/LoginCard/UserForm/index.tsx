import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { formSchema } from '../../../validations';
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
    RegisterSubmitButton,
    TermsLink,
    LoginLink,
    Form,
    MessageError2,
    Title,
    Divider,
} from '../styles';
import { toast } from 'react-toastify';

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

export const UserForm = (props: any): JSX.Element => {
    const [isLogin, setIsLogin] = useState(true);

    const [isFieldsValid, setIsFieldsValid] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const api = useApi();
    const auth: any = useContext(AuthContext);
    const userType = props.type;

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
        if (data !== email) {
            // TODO: Tratar os erros com as mensagens do backend
            setHasError(true);
        }
    };

    async function handleFormOnSubmit() {
        setIsFormSubmitted(true);
        const data = await api.login(email, password, userType);
        // Vai receber os dados do contexto para verificação
        const isLogged = await auth.login(email, password, userType);

        try {
            compareEmailAndData(data.info.email);

            toast.success(`Login efetuado com sucesso ${data.info.name}! `, {
                position: 'top-right',
                theme: 'light',
            });

            if (email && password && isLogged && userType) {
                navigate('/feedjobs');
            }
        } catch (err) {
            // TODO: Tratar os erros com as mensagens do backend
            setHasError(data.message);
        }
    }

    // const isFormValid = Object.keys(formState.erros).length === 0;

    async function handleRegisterSubmit() {
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
        <>
            {isLogin ? (
                <Title>Candidato</Title>
            ) : (
                <Title>Cadastro de candidato</Title>
            )}

            <Divider style={{ marginBottom: isLogin ? '32px' : '20px' }} />

            {isLogin ? (
                <Form
                    id="login-form"
                    // TODO: Retornar com submissão a partir do  Form
                    // onSubmit={handleSubmit(handleFormOnSubmit)}
                    onSubmit={(e) => e.preventDefault()}
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

                        {/* TODO: Mensagem do backend não é mais inserida */}
                        {hasError || (
                            <MessageError2>
                                {errors.password && (
                                    <>{errors.password.message}</>
                                )}
                            </MessageError2>
                        )}
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
                            // TODO: Verificar porque disable não funciona
                            onClick={handleFormOnSubmit}
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
                            placeholder="Digite seu nome completo"
                            aria-label="Nome do candidato"
                        ></Input>
                        <MessageError>
                            {errors.registerName && (
                                <>{errors.registerName.message}</>
                            )}
                        </MessageError>
                    </InputContainer>
                    <InputContainer>
                        <div>
                            <Input
                                type="text"
                                {...register('registerEmail')}
                                placeholder="Digite sei email"
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
                                onClick={() => setShowPassword(!showPassword)}
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
                                type={showConfirmPassword ? 'text' : 'password'}
                                {...register('confirmPassword')}
                                placeholder="Confirme sua senha"
                                aria-label="Senha"
                            />
                            <IconWrapper
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
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
                                {/* TODO: Direcionar para as páginas correspondentes após criadas */}
                                Li e aceito os <a href="/">Termos de Uso</a> e{' '}
                                <a href="/">Política de Privacidade</a>
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
        </>
    );
};
