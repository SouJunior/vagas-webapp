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
    schemaCompanyLoginForm,
    schemaCompanyRegisterForm,
} from '../../../validations/CompanyValidations/index';

import {
    MessageError,
    InputContainer,
    IconWrapper,
    Input,
    Label,
    TermsLink,
    MessageError2,
    LoginLink,
    CheckboxInput,
    CheckboxContainer,
    SecondDivider,
    ButtonContainer,
    LoginButton,
    RegisterButton,
    RegisterSubmitButton,
    Form,
    Title,
    Divider,
} from '../styles';

export const CompanyForms = (props: any): JSX.Element => {
    const [hasError, setHasError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [isLogin, setIsLogin] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const api = useApi();
    const auth: any = useContext(AuthContext);

    // Recebe o tipo de usuário
    const companyType = props.type;

    // Define qual formulário deverá ser validado
    const getFormValidation =
        isLogin === true ? schemaCompanyLoginForm : schemaCompanyRegisterForm;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(getFormValidation),
    });

    const compareEmailAndData = (data: any) => {
        if (data !== email) {
            setHasError(true);
        }
    };

    // Realiza loging e manipula os dados
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

    // =================================================
    // Validação e manipulação do formulário de cadastro
    // =================================================

    const removeSpecialCharCnpj = (cnpj: string) => {
        if (cnpj) {
            cnpj.replace(/[^\d]+/g, '');
        }
        return cnpj;
    };

    // Manipula os dados e envia a requisição
    async function handleRegisterSubmit() {
        const registerData = await auth.registerCompany(
            registerCheck[0],
            registerCheck[1],
            registerCheck[2],
            registerCheck[3],
            registerCheck[4],
        );

        if (!registerData) {
            setIsLogin(true);
        }
    }

    // Monitora os input enquanto preechidos
    const registerCheck = watch([
        'registerName',
        'registerCnpj',
        'registerEmail',
        'registerPassword',
        'confirmPassword',
    ]);

    return (
        <>
            {isLogin ? (
                <Title>Empresa</Title>
            ) : (
                <Title>Cadastro de empresa</Title>
            )}

            <Divider style={{ marginBottom: isLogin ? '32px' : '20px' }} />
            {/* renderiza se existe(true) um formulário do tipo login */}
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
                // renderiza se isLogin === false
                <Form onSubmit={handleSubmit(handleRegisterSubmit)}>
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
                        {/* redireciona se isLogin === true */}
                        <button onClick={() => setIsLogin(true)}>
                            Faça o Login
                        </button>
                    </LoginLink>
                </Form>
            )}
        </>
    );
};
