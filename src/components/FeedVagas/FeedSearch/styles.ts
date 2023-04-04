import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px 0 0 5px;
  border: none;
  width: 300px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #00bfff;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0080ff;
  }
`;
