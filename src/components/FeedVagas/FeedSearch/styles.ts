import styled from 'styled-components';
import LocationIcon from '../../../assets/imgs/LocationPin-icon.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  form {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;
    height: 37px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
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

export const InputLabel = styled.span`
  font-weight: bold;
  position: absolute;
  font-size: 14px;
  color: #4E4E4E;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ECF5FF;
  border: 1px solid #C1DFFF;
  border-radius: 6px;
  padding: 10px;
  width: 100%;
  max-width: 358px;

  :focus-within {
    box-shadow: 0 0 0 1px #1165BA;
  }
`;

export const InputIcon = styled.input`
flex-grow: 1;
font-size: 14px;
border: none;
padding-left: 40px;
background-color: transparent;
margin-left: 10px;
:focus {
  outline: none;
}
`;

export const InputIconBefore = styled.span`
content: url(${LocationIcon});
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%);
`;

export const Button = styled.button`
  padding: 5px 20px;
  background-color: #1165BA;
  color: #fff;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  max-width: 330px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 100%;
  &:hover {
    background-color: #0080ff;
  }
`;
