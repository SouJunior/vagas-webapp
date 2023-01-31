import {useForm} from "react-hook-form";
import PasswordIcon from "../../assets/imgs/passwordIcon.svg"
import UserIcon from "../../assets/imgs/userIcon.svg"
import EmailIcon from "../../assets/imgs/emailIcon.svg"
import { Button } from "../Button";
import InputWrapper from "../InputWrapper"
import { ContainerCard, LineDivisor, StrengthIndicator } from "./styled";


function handleFormOnSubmit (data: any){
  console.log(data)
}

export const RegisterCard = () => {
  const {
    register,
    handleSubmit,
  } = useForm({
  });

  return(
    <>
      <ContainerCard>
        <div className="box-text-card">
          <h1>Sou<span>Junior</span></h1>
          <h2>Criar Conta</h2>
        </div>
        <LineDivisor />
        <form onSubmit={handleSubmit(handleFormOnSubmit)}>
          <InputWrapper>
          <div className="wrapper-input">
                <img className="icons-input" src={UserIcon} alt="" />               
                <input 
                  type="text"
                  {...register('name')}
                  placeholder="Nome"
                  aria-label="Nome" 
                />
            </div>
          </InputWrapper>
          <InputWrapper>

            <div className="wrapper-input">
                <img className="icons-input" src={EmailIcon} alt="" />               
                <input 
                  type="text"
                  {...register('email')}
                  placeholder="E-mail"
                  aria-label="Email" 
                />
            </div>
          </InputWrapper>
          <InputWrapper>
          <div className="wrapper-input">
            
                <img className="icons-input" src={PasswordIcon} alt="" />               
                <input 
                  type="text"
                  {...register('password')}
                  placeholder="Senha"
                  aria-label="Senha" 
                />
            </div> 
          </InputWrapper>


          <div className="wrapper-indicator">
            <StrengthIndicator />
            <StrengthIndicator />
            <StrengthIndicator />
            <StrengthIndicator />
          </div>
          
          <LineDivisor />
               
          <div className="wrapper-input">
            <label className="checkbox-termos">
              <input type="checkbox" />
                Li e aceito os<span><a href="www.soujunior.tech" target="_blank">termos</a></span>e<span><a href="www.soujunior.tech" target="_blank">políticas de privacidade</a></span> 
            </label>
          </div>
            
            <div className="wrapper-button">
              <Button children="Criar Conta" height="51px" />
              <Button
                children="Fazer Login"
                background="outline" 
                height="51px" 
                onClick={() => window.open('www.soujunior.tech', '_black')}
              />
            </div>
        </form>
      </ContainerCard>
    </>
  )
}