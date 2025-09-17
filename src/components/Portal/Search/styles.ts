import styled from 'styled-components';
import SearchImage from '../../../assets/imgs/search.svg';

export const SearchButton = styled.button`
  background-color: #046ad0;
  color: #fdfdfd;
  width: 163px;
  height: 48px;
  border-radius: 8px;
`;
export const Input = styled.input`
  border: 1px solid #000000;
  border-radius: 8px;
  height: 52px;
  width: 348px;
  padding-left: 40px;
  background-image: url(${SearchImage});
  background-repeat: no-repeat;
  background-position-x: 1rem;
  background-position-y: center;

  @media (max-width: 280px) {
    width: 270px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input:focus {
    outline: 1px solid #046ad0;
    border: none;
  }
`;
export const Border = styled.div`
  border-top: 1px solid #c5c7c5;
  width: 90%;
  align-self: center;
  padding-top: 10px;
`;

export const Box = styled.div`
  background: #fdfdfd;
  border: 1px solid #046ad0;
  border-radius: 5px;
  width: 348px;
  padding-top: 25px;
  padding-bottom: 15px;
  position: absolute;
  top: 202px;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 280px) {
    width: 270px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #212121;
  font-size: 18px;
  display: flex;
  padding-bottom: 10px;

  div {
    margin: 0;
    padding-left: 20px;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
`;
