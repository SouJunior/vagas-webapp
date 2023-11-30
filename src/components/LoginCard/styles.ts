import styled from 'styled-components';
import { AiFillEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import tickImage from '../../assets/imgs/tick.svg';
import disabledImage from '../../assets/imgs/disabled.svg';

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
    margin-top: 14px;
    @media (max-width: 280px) {
        width: 240px;
    }

    img {
        display: none;
        align-items: center;
        justify-content: center;
    }
`;

export const Card = styled.div`
    width: 500px;
    margin-bottom: 24px;
    overflow-y: auto;
    padding: 20px;
    background-color: #fdfffc;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-height: 900px;
    @media (max-height: 500px) {
        margin-bottom: 0px;
        padding: 5px;
    }
    @media (min-width: 1024px) {
        max-width: 1024px;
    }
    @media (max-width: 550px) {
        width: 98%;
    }
    @media (max-width: 400px) {
        width: 350px;
    }
    @media (max-width: 280px) {
        width: 260px;
        padding: 0;
        overflow-x: hidden;
        margin-bottom: 0px;
    }
`;

export const LoginTypeButton = styled.div`
    display: flex;
    justify-content: space-between;
    color: #1165ba;
    margin: 8px 10px 0 10px;
    padding: 12px;

    @media (max-height: 500px) {
        padding: 10px 0;
        margin: 0px;
        justify-content: center;
    }
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
    @media (max-height: 500px) {
        padding: 10px 0;
    }
    button:hover {
        background-color: #00000022;
    }

    span {
        padding: 0 10px;
    }
`;

export const DivLogo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 42px;
    margin-top: 22px;
    @media (max-height: 450px) {
        display: none;
    }
    @media (max-height: 600px) {
        margin-bottom: 15px;
        margin-top: 7px;
    }
    @media (max-width: 550px) {
        margin-bottom: 22px;
        margin-top: 11px;
    }
    @media (max-width: 400px) {
        margin-bottom: 15px;
        margin-top: 7px;
    }
    @media (max-width: 375px) {
        margin-bottom: 5px;
        margin-top: 5px;
    }
`;

export const Title = styled.h1`
    font-size: 1.0469rem;
    font-weight: 600;
    text-align: center;
    color: #1165ba;
    margin-bottom: 8px;
    @media (max-height: 450px) {
        display: none;
    }
`;

export const Divider = styled.hr`
    height: 1px;
    background-color: #d7d9d7;
    width: 310px;
    margin: 0 auto;
    margin-bottom: 32px;
    @media (max-height: 450px) {
        display: none;
    }
    @media (max-width: 375px) {
        margin-bottom: 0px;
    }
`;

export const SecondDivider = styled(Divider)`
    margin-bottom: 48px;
    margin-top: 12px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    height: 48px;
    width: 300px;
    position: relative;
    padding-left: 16px;
    padding-right: 44px;
    color: blue;
    border: 1px solid #cdcdcd;
    border-radius: 6px;
    outline: none;
    @media (max-height: 600px) {
        height: 33px;
    }
    @media (max-width: 375px) {
        width: 240px;
    }
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
    @media (max-width: 280px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
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
    @media (max-height: 620px) {
        margin-bottom: 5px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginButton = styled.button`
    width: 310px;
    height: 56px;
    border-radius: 3px;
    margin-bottom: 20px;
    color: white;
    background-color: #1165ba;
    cursor: pointer;
    @media (max-width: 375px) {
        width: 240px;
        height: 36px;
    }
    @media (max-height: 620px) {
        height: 36px;
    }

    &:disabled {
        background-color: #90cdf4;
        cursor: not-allowed;
    }
`;
export const RegisterButton = styled(LoginButton)`
    background-color: transparent;
    border: 1px solid #1165ba;
    color: #1165ba;
    @media (max-width: 280px) {
        width: 240px;
        height: 36px;
    }
    @media (max-height: 620px) {
        height: 36px;
    }
`;

export const RegisterSubmitButton = styled(RegisterButton)`
    background-color: #1165ba;
    color: white;
    margin-bottom: 8px;
    width: 300px;
    height: 52px;
    @media (max-height: 620px) {
        height: 36px;
    }
    @media (max-width: 375px) {
        width: 240px;
        height: 36px;
    }
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

export const Checklist = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fdfffc;
    padding: 1rem;
    border-radius: 8px;

    h2 {
        font-weight: 600;
        margin-bottom: 5px;
        align-self: center;
        color: #1165ba;
    }
    @media (max-height: 720px) {
        display: none;
        padding: 0;
    }
    @media (max-width: 375px) {
        display: none;
    }
`;

interface ListProps {
    valid: boolean;
}
export const List = styled.li<ListProps>`
    display: flex;
    flex-direction: space-between;
    list-style: none;
    font-size: 14px;
    background-repeat: no-repeat;
    background-position-y: center;
    background-image: ${(props) =>
        props.valid ? `url(${tickImage})` : `url(${disabledImage})`};
    color: ${(props) => (props.valid ? '#149911' : '#C1292E')};
`;
export const MessageChecklist = styled.div`
    padding-left: 32px;
`;

export const MaskaredInput = styled.input`
    height: 48px;
    width: 300px;
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
