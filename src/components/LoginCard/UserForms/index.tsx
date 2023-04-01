import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../../hooks/useApi';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { toast } from 'react-toastify';
import { EmailIcon } from '../../EmailIcon';
import { PasswordIcon } from '../../PasswordIcon';
import {
    schemaUserLoginForm,
    schemaUserRegisterForm,
} from '../../../validations/UserValidations/index';

import {
    MessageError,
    MessageError2,
    Divider,
    Form,
    Title,
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
    LoginLink,
    RegisterSubmitButton,
    TermsLink,
} from '../styles';

export const UserForms = (props: any): JSX.Element => {
    const [hasError, setHasError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isLogin, setIsLogin] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const api = useApi();
    const auth: any = useContext(AuthContext);

    // Recebe o tipo do usuário
    const userType = props.type;

    // Define qual formulário deverá ser validado
    const getValidityForm =
        isLogin === true ? schemaUserLoginForm : schemaUserRegisterForm;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(getValidityForm),
    });

    const compareEmailAndData = (data: any) => {
        if (data !== email) {
            // TODO: Tratar os erros com as  mensagens do backend
            setHasError(true);
        }
    };

    // Realiza o login e maniopula dados
    async function handleFormOnSubmit() {
        setIsFormSubmitted(true);
        const data = await api.login(email, password, userType);

        // Recebe dados do contexto para verificação
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
            setHasError(data);
        }
    }

    // Validação e manipulação do formulário de cadastro
    async function handleRegisterSubmit() {
        try {
            const registerData = await auth.register(
                registerCheck[0],
                registerCheck[1],
                registerCheck[2],
                registerCheck[3],
            );

            if (!registerData) {
                setIsLogin(true);
            }
        } catch (error) {
            setHasError(true);
        }
    }

    // Monitora os input enquanto preechidos
    const registerCheck = watch([
        'registerName',
        'registerEmail',
        'registerPassword',
        'confirmPassword',
    ]);

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

                        {/* TODO: Mensagem do backend não é mais inserida */}
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
                            // TODO: Verificar porque disable não funciona
                        >
                            Entrar
                        </LoginButton>

                        <RegisterButton
                            type="button"
                            onClick={() => setIsLogin(false)}
                        >
                            Criar conta
                        </RegisterButton>
                    </ButtonContainer>
                </Form>
            ) : (
                // renderiza se isLogin === false
                <Form
                    id="register-form"
                    onSubmit={handleSubmit(handleRegisterSubmit)}
                >
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
                    >
                        Criar conta
                    </RegisterSubmitButton>
                    <LoginLink>
                        Já tem conta?{' '}
                        <button
                            onClick={() => {
                                return setIsLogin(true);
                            }}
                        >
                            Faça o Login
                        </button>
                    </LoginLink>
                </Form>
            )}
        </>
    );
};
