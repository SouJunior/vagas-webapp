import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ConfirmPasswordSchema } from '../validations/ConfirmPasswordValidation';
import { 
          Container, 
          Form,
          StyledIconOpenEyes,
          StyledIconClosedEyes,
          Button,
          Checklist,
          List,
          ErrorMessages,
          MessageChecklist,
          ConfirmPasswordErrorMessage, 
        } from './styles/ResetPasswordStyles';

const ResetPassword = () => {

  const [visible,setVisible] = useState(false);
  const [repeatVisible,setRepeatVisible] = useState(false); 

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(ConfirmPasswordSchema),
  });

  const characters = /(?=^.{8,20}$).*$/;
  const letters= /(?=.*[a-z])(?=.*[A-Z])\w+/;
  const number= /(?=.*[0-9])\w+/;
  const specialCharacters= /(?=.*\W+).*$/;

  const newPasswordValue = watch("newPassword");

  const onSubmitHandler = async () => {
    //TODO: falta integração com o back-end.
}

  return (
    <Container>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <h1>Redefinir senha</h1>
          <label>
            <span>Nova senha</span>
            <ConfirmPasswordErrorMessage error={!!errors.confirmPassword}>
              <input  
                maxLength={20} 
                type={visible ? "text" : "password"}
                {...register(("newPassword"), {onChange: () => isSubmitted && trigger("confirmPassword")})}
              />
              <button
                type="button" 
                onClick={() => {setVisible(!visible)}}
              >
                {
                  visible ? 
                  (<StyledIconClosedEyes/>) : 
                  (<StyledIconOpenEyes/>)
                }
              </button>
            </ConfirmPasswordErrorMessage>
          </label>
          <ErrorMessages>
            {errors.newPassword && <>{errors.newPassword.message}</>}
          </ErrorMessages>
          <label>
            <span>Repetir senha</span>
            <ConfirmPasswordErrorMessage error={!!errors.confirmPassword}>
              <input  
                type={repeatVisible ? "text" : "password"}
                onFocus={async () => await trigger("newPassword")}
                {...register ("confirmPassword")}
              />
              <button
                type="button" 
                onClick={() => {setRepeatVisible(!repeatVisible)}}
              >
                {
                  repeatVisible ? 
                  (<StyledIconClosedEyes/>) : 
                  (<StyledIconOpenEyes/>)
                }
              </button>
            </ConfirmPasswordErrorMessage>
          </label>
          <ErrorMessages>
            {errors.confirmPassword && <>{errors.confirmPassword?.message}</>}
          </ErrorMessages>
          <ErrorMessages>
            {isSubmitSuccessful && (<h2>
              Senha redefinida com sucesso.
              </h2>)
            }
          </ErrorMessages>
          <Checklist>
          <h2>Sua senha deve conter:</h2>
            <ul>
              <List valid={newPasswordValue?.match(characters)}>
                <MessageChecklist>No mínimo 8 caracteres</MessageChecklist>
              </List>          
              <List valid={newPasswordValue?.match(letters)}>
                <MessageChecklist>Letras maiúsculas e minúsculas</MessageChecklist>
              </List>
              <List valid={newPasswordValue?.match(number)}>
                <MessageChecklist>No mínimo 1 número</MessageChecklist>
              </List>
              <List valid={newPasswordValue?.match(specialCharacters)}>
                <MessageChecklist>No mínimo um caracter especial (!@?{}...)</MessageChecklist>
              </List>
            </ul>
          </Checklist>
          <Button type="submit">
            Definir nova senha
          </Button>
        </Form>
    </Container>
  )
}

export default ResetPassword