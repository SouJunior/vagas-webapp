import styled from "styled-components";

interface InputWrapperProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: relative;

  label {
    color: ${({ theme }) => theme.colors.black};
    font-size: 90%;
    font-weight: 500;
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors.mutedDark};
    border-radius: 5px;

    box-sizing: border-box;
    outline: none;

    width: 100%;
    padding: 0.7rem 1rem;
    padding-right: 3rem;
    margin-top: 6px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.mutedDark};
    }

    :hover {
      border-color: ${({ theme }) => theme.colors.mutedDarker};
    }

    :focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  svg {
    position: absolute;
    right: 1rem;
    top: 55%;
    height: 1.3rem;
    width: 1.3rem;
    fill: ${({ theme }) => theme.colors.mutedDark};
  }
`;

const InputWrapper: React.FC<InputWrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default InputWrapper;
