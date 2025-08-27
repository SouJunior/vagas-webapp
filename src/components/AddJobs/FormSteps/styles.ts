import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';

export const Label = styled.label`
  color: #515050;
  font-size: 16px;
  line-height: 19px;
  margin-top: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  height: 50px;
  padding-left: 16px;

  &:focus {
    outline: none;
    border: 2px solid #0077ff;
  }

  ::placeholder {
    color: #d8d8d8;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  height: 100px;
  padding: 10px 16px;

  &:focus {
    outline: none;
    border: 2px solid #0077ff;
  }

  ::placeholder {
    color: #d8d8d8;
  }
`;
export const ErrorMessage = styled.span`
  color: #ff0000;
  opacity: 0.8;
  font-size: 14px;
  margin-left: 8px;
  margin-top: 4px;
`;

export const SelectInput = styled.select<{ width?: number }>`
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23515050' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  appearance: none;
  color: #515050;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 30px;
  padding-left: 16px;
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  }

  &:focus {
    outline: none;
    border: 2px solid #0077FF;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: #515050;
`;

export const FormSteps = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #515050;
`;

export const HorizontalLine = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 534px;
`;

export const Button = styled.button`
  width: 262px;
  height: 52px;
  background: #1165ba;
  border-radius: 4px;
  color: #ffffff;
  margin-top: 23px;
`;

export const CancelButton = styled(Button)`
  background: transparent;
  color: #1165ba;
  border: 1px solid #1165ba;
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 11px;
  margin-top: auto;
`;

export const SalarySection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SalaryInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const SalaryInput = styled(NumericFormat)`
  width: 250px;
  height: 50px;
  border: 1px solid #1165ba;
  border-radius: 6px;
  padding-left: 12px;
  font-size: 18px;

  ::placeholder {
    color: #d8d8d8;
    font-size: 16px;
  }

  &:focus {
    outline: none;
    border: 2px solid #0077ff;
  }
`;

export const RadioInputContainer = styled.div`
  display: flex;
  gap: 50px;

  label {
    color: #515050;
    font-size: 16px;
    margin-top: 4px;
    line-height: 19px;
    display: flex;
    align-items: center;
  }
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;
