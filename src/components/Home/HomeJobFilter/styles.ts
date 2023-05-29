import styled, {css} from "styled-components";

interface Props {
    active: boolean;
}

export const FormWrapper = styled.div<Props>`
    position: relative;
    transition: all 0.5s ease-in-out;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 2001;
  

    ${({ active }) => active && css`
    height: 40px;
    position: fixed;
    background-color: #fff;
    height: 70px;
    padding: 12px;
    top: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
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
     transition: all 0.5s ease-in-out;

     
     :focus {
        outline-color: ${({ theme }) => theme.colors.primary};
     }

    ${({ active }) => active && css`
        width: 520px;
        height: 42px;
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
`;