import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 12px;
  background-color: ${({theme}) => theme.colors.primary};
  border: 0;
  border-radius: 10px;
  color: #FFF;
  
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  outline: none;

  &:active {
    background-color: ${({theme}) => theme.colors.primaryDark};
  }
`;
