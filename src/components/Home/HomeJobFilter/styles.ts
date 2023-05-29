import styled, {css} from "styled-components";

interface Props {
    active: boolean;
}

export const FormWrapper = styled.div<Props>`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 2001;
  

    ${({ active }) => active && css`
    height: 40px;
    position: fixed;
    height: 70px;
    padding: 12px;
    top: 17px;
    left: 40%;
    transform: translateX(-47%);
    margin: 0 auto;
    visibility: visible;
    `}
`;

export const Form = styled.form`
    display: flex;
    gap: 28px;
    position: relative;
`;

export const Input = styled.input<Props>`
     width: 796px;
     height: 58px;
     border: 1.5px solid #515151;
     border-radius: 52px;
     padding: 0 56px;
     color: #515151;
     transition: all 0.3s ease-in-out;

     
     :focus {
        outline-color: ${({ theme }) => theme.colors.primary};
     }

    ${({ active }) => active && css`
        width: 540px;
        height: 42px;
        padding: 0 26px;
        font-size: 14px;
        border: 1.5px solid ${({ theme }) => theme.colors.primary};
    `}

`

export const SearchButton = styled.button<Props>`
    position: absolute; 
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 52px;
    color: #fff;
    right: 3px;
    height: 100%;
    width: 100%;
    max-height: 52px;
    max-width: 207px;
    top: 50%;
    transform: translateY(-50%);

    ${({ active }) => active && css`
        max-height: 38px;
        width: auto;
        padding: 0px 14px;
        font-size: 15px;
        top: 2px;
        transform: translateY(0%);

    `}
`;