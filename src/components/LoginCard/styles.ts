import styled from 'styled-components';

export const MessageError = styled.p`
    color: red;
    font-size: 13px;
    margin-top: 4px;
    text-align: center;
`;

export const MessageError2 = styled(MessageError)`
    font-size: 13px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
  width: 500px;
  overflow-y: auto;
  padding: 10px;
  background-color: #fdfffc;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-height: 900px;
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

export const LoginTypeButton = styled.div`
    display: flex;
    justify-content: space-between;
    color: #1165ba;
    margin: 8px 10px 0 10px;
    padding: 12px;
    button {
        width: 145px;
        height: 35px;
        border: 1px solid #1165ba;
        justify-content: center;
        display: flex;
        gap: 10px;
        align-items: center;
        border-radius: 5px;
        font-size: 17px;
    }
    button:hover {
        background-color: #00000022;
    }
`;

export const DivLogo = styled.div`
    display: flex;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 1.0469rem;
    font-weight: 600;
    text-align: center;
    color: #1165ba;
    margin-bottom: 8px;
`;

export const Divider = styled.hr`
    height: 1px;
    background-color: #d7d9d7;
    width: 310px;
    margin: 0 auto;
    margin-bottom: 32px;
`;

export const SecondDivider = styled(Divider)`

    margin-top: 12px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    height: 48px;
    width: 350px;
    position: relative;
    padding-left: 16px;
    padding-right: 44px;
    color: blue;
    border: 1px solid #cdcdcd;
    border-radius: 6px;
    outline: none;

    &:focus {
        border: 1px solid #60a5fa;
        box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
    }
`;

export const IconWrapper = styled.span`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 6px;
    max-width: 280px;
    cursor: pointer;
    font-size: 0.75rem;
    color: #171123;
    line-height: 14px;
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
    width: 12px;
    height: 12px;
    margin-bottom: 2px;
    cursor: pointer;
    background-color: #1165ba;
    &:checked::before {
        background-color: #1165ba;
    }

    &:checked::after {
        background-color: #1165ba;
    }
`;

export const CheckboxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 310px;
    a {
        color: #1165ba;
        float: right;
        font-size: 0.75rem;
        text-decoration-line: underline;
        text-underline-offset: 2px;
        padding-bottom: 2px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    max-width: 340px;
    flex-wrap: wrap;
    align-items: stretch;
    margin-bottom: 15px;
    justify-content: center;
    div {
        position: relative;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginButton = styled.button`
    width: 350px;
    height: 56px;
    border-radius: 3px;
    margin-bottom: 20px;
    color: white;
    background-color: #1165ba;
    cursor: pointer;
    &:disabled {
        background-color: #90cdf4;
        cursor: not-allowed;
    }
`;
export const RegisterButton = styled(LoginButton)`
    background-color: transparent;
    border: 1px solid #1165ba;
    color: #1165ba;
`;

export const RegisterSubmitButton = styled(RegisterButton)`
    background-color: #1165ba;
    color: white;
    margin-bottom: 20px;
    width: 350px;
    height: 52px;
`;

export const TermsLink = styled.p`
    margin-top: 12px;

    a {
        color: #1165ba;
        font-weight: 600;
        &:hover {
            color: darkblue;
        }
    }
`;

export const LoginLink = styled.p`
    font-size: 14px;

    button {
        color: #1165ba;
        font-weight: 600;
        padding-bottom: 20px;
        &:hover {
            color: darkblue;
        }
    }
`;
