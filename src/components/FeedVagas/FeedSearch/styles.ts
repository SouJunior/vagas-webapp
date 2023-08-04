import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  form {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;
    height: 37px;

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 8px;
    }
  }

`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 42px;
  width: 100%;
  max-width: 358px;
  color: #696969;
  font-size: 14px;
  background-color: #ECF5FF;
  border: 1px solid #C1DFFF;

  :focus {
    outline-color: #1165BA;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #003986;
  color: #fff;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  max-width: 148px;
  border: none;
  border-radius: 47px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #fff;
    color: #003986;
    border: 1px solid #003986;
  }

`;
