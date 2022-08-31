import styled, {css} from "styled-components";

interface ButtonWrapperProps {
    background : string;
}
export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  padding: 8px 12px;
  background-color: ${({theme}) => theme.colors.primary};
  border: 1px solid #004892;
  border-radius: 4px;
  color: #FFF;

  min-width: fit-content;

  box-sizing: boder-box;
  
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  outline: none;

  &:active {
    background-color: ${({theme}) => theme.colors.primaryDark};
  }

  ${({background}) => background === "outline" && css`
    background: transparent;
    border-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.primary};
    
  `}



`;
