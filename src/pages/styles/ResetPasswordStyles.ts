import styled from 'styled-components';
import { AiFillEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import tickImage from '../../assets/imgs/tick.svg';
import disabledImage from '../../assets/imgs/disabled.svg';

export const Container = styled.main`
  background: linear-gradient(
    294.77deg,
    rgba(10, 103, 199, 1) 50.32%,
    rgba(0, 114, 231, 0.67) 100%
  );
  height: 100vh;
  overflow-y: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  h1 {
    text-align: center;
    color: #fdfffc;
    font-size: 3rem;
    font-weight: 700;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  label {
    margin-bottom: 2rem;
    display: inline-flex;
    flex-direction: column;

    span {
      color: #fdfffc;
      font-weight: 600;
      font-size: 1.5rem;
    }
  }

  label div {
    display: flex;
    background-color: #fdfffc;
    margin-top: 10px;
    padding: 0.5rem;
    border-radius: 6px;
    border-width: 2px;

    input {
      outline-color: transparent;
      width: 500px;

      @media (max-width: 600px) {
        width: 250px;
      }

      @media (max-width: 280px) {
        width: 150px;
      }
    }

    button {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
`;

export const ErrorMessages = styled.div`
  color: #fdfffc;
  padding-bottom: 20px;
`;
interface ErrorProps {
  error: boolean;
}

export const ConfirmPasswordErrorMessage = styled.div<ErrorProps>`
  border-color: ${(props) => (props.error ? 'red' : 'none')};
`;

export const StyledIconOpenEyes = styled(AiFillEye)`
  height: 36px;
  width: 36px;
  justify-self: end;
  fill: #cbd5e1;
`;
export const StyledIconClosedEyes = styled(RiEyeCloseLine)`
  height: 36px;
  width: 36px;
  justify-self: end;
  fill: #cbd5e1;
`;

export const Checklist = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfffc;
  padding: 1.75rem;
  border-radius: 8px;

  h2 {
    font-weight: 600;
    margin-bottom: 5px;
    align-self: center;
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

export const Button = styled.button`
  padding: 2px;
  margin-top: 30px;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  width: 380px;
  height: 54px;
  color: #fdfffc;
  font-weight: bold;
  font-size: 1.5em;

  @media (max-width: 600px) {
    width: 250px;
  }

  @media (max-width: 280px) {
    width: 150px;
    font-size: 1em;
  }

  &:hover {
    opacity: 0.8;
  }
`;
