import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.mutedDark};
  border-radius: 5px;

  box-sizing: border-box;
  outline: none;

  width: 100%;
  padding: 0.7rem 1rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.mutedDark};
  }

  :hover {
    border-color: ${({ theme }) => theme.colors.mutedDarker};
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.primary};

    * {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Input = (
  props: JSX.IntrinsicAttributes & InputHTMLAttributes<HTMLInputElement>
) => {
  return <InputWrapper {...props}></InputWrapper>;
};

export default Input;
