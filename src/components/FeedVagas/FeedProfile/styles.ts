import styled from 'styled-components';

export const ProfileImage = styled.img`
  border-radius: 50%;
  background-color: #fb923c;
  width: 120px;
  height: 120px;
  cursor: pointer;
  overflow: hidden;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;

`;

export const CheckBoxContainer = styled.div`
    display: flex;
    gap: 12px;

    label {
        color: #262626;
    }
`;


export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input.attrs({ 'aria-checked': false })`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  aria-checked: false;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    aria-checked: true;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
    &[aria-checked='true'] {
      aria-checked: true;
    }
  }
`;
