import styled from 'styled-components';

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 29rem;
    padding: 40px;

    border: 0.8px solid #BABABA;
    border-radius: 5.62px;

    box-shadow: 0px 4.01186px 3.20949px -2.40711px rgba(0, 0, 0, 0.1);

    background-color: ${props => props.theme.colors.muted};

    .box-text-card{
       display: flex;
       flex-direction: column;
       align-items: center;

       h1{
           font-size: 2.813rem;
           font-weight: 400;
           color: ${props => props.theme.colors.primary};

           span{
            font-weight: 700;
           }
       }

       h2{
        font-size: 1.625rem;
        font-weight: 400;
        margin-bottom: 1rem;
       }
       
    }

    .wrapper-input{
        display: flex;
        position: relative;
        margin-bottom: 1rem;
    }

    .icons-input{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 10px;
        top: 15px;
    }

    .wrapper-button{
       width: 23.12rem;
       display: flex;
       flex-direction: column;
       gap: 16px;
    }

    .checkbox-termos{
        display: flex;
        font-size: 0.75rem;
        gap: 5px;
        margin-bottom: 0.625rem;
        
        input{
            margin-right: 3px;           
        }
        span{
            text-decoration: underline;
            color: #1165BB;
            
        }     
    }
    .wrapper-indicator{
        display: flex;
        justify-content: space-around;
    }

`
export const LineDivisor = styled.div`
    width: 23.12rem;
    border: 1px solid #E8E8E8;
    margin-bottom: 1rem;

`

const WrapperStrengthIndicator = styled.div`
    width: 88px;
    height: 5px;
    border-radius: 3px;
    background-color: transparent; // alterar color fazendo a validação de força de senha
    margin-bottom: 1.688rem;
`

export function StrengthIndicator(){
    return (
        <WrapperStrengthIndicator />
        )
}