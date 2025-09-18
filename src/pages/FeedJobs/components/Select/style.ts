import ArrowDropDown from '../../../../assets/imgs/arrow-drop-down.svg';

import styled from 'styled-components';

export const SelectBox = styled.div`
  z-index: 40;
  padding-right: 16px;
  border-radius: 147px;
  border: 1px solid #c1dfff;
  background: url(${ArrowDropDown}) no-repeat right transparent;
  background-position: calc(100% - 10px) center;
`;

export const Select = styled.select`
  padding: 8px 14px;
  border: none;
  border-radius: 0;
  outline: none;
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  line-height: 120%;
  color: #475467;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
`;

export const Option = styled.option`
  font-size: 14px;
  font-weight: 600;
  line-height: 120%;
  color: #475467;

  :first-child {
    display: none;
  }
`;
