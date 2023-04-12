import styled from "styled-components";
import { NumericFormat } from 'react-number-format';
import { RiInformationLine } from 'react-icons/ri';


export const  MainGrid = styled.main`
display: grid;
grid-template-columns: 1fr;

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

gap: 62px;
margin-top: 6.1875rem;
width: 100%;
max-width: 74.5625rem;
margin: 0 auto 0.5rem;
border-bottom: 1px solid #E8E8E8;
`;

export const HeaderContainer = styled.div`
  grid-column: 1 / -1;
  margin-top: 120px;
`;

export const LogoImage = styled.img`
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 315px;
`;

export const SeparatorLine = styled.span`
  display: block;
  width: 100%;
  border-top: 1px solid #E8E8E8;
`;

export const FormSection = styled.section`
    width: 100%;
    margin-bottom: 62px;
    margin-top: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 583px;
  height: 655px;
  background: #FFFFFF;
  border: 1px solid #E8E8E8;
  box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.08);
  border-radius: 6px;
  padding: 24px;
`;

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
  border: 1px solid #E8E8E8;
  border-radius: 6px;
  height: 50px;
  padding-left: 16px;
`

export const TextArea = styled.textarea`
  border: 1px solid #E8E8E8;
  border-radius: 6px;
  height: 100px;
  padding: 10px 16px;
`
export const ErrorMessage = styled.span`
  color: #FF0000;
  opacity: 0.8;
  font-size: 14px;
  margin-left: 8px;
  margin-top: 4px;
`;

export const Select = styled.select<{ width?: number }>`
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
  width: ${props => props.width ? `${props.width}px` : 'auto'};
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
  background: #1165BA;
  border-radius: 4px;
  color: #FFFFFF;
`;

export const CancelButton = styled(Button)`
  background: transparent;
  color: #1165BA;
  border: 1px solid #1165BA;
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 11px;
  margin-top: 32px;
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
  border: 1px solid #1165BA;
  border-radius: 6px;
  padding-left: 12px;
  font-size: 18px;
`;

export const RadioInputContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 16px;
  `;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const NoJobsContainer = styled.div`
  margin-top: 32px;
  width: 599px;
  height: 655px;
  border: 2px dashed #1165BA;
  border-radius: 0.375rem;
  text-align: center;
  padding: 6rem;
`;

export const PreviewContainer = styled.div`
  border: 1px solid #E8E8E8;
  width: 599px;
  height: 655px;
  margin-top: 32px;
  box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.08);
  border-radius: 6px;
  padding: 20px;

`;

export const InnerContainer = styled.div`
  margin-bottom: 45px;
  margin: 0 auto;
  border: 1px solid #1165BA;
  border-radius: 50%;
  width: 10.625rem;
  padding: 36px;
`;

export const Icon = styled(RiInformationLine)`
  font-size: 6rem;
  color: #1165BA;
`;

export const Title = styled.p`
  margin-top: 45px;
  font-size: 25px;
  line-height: 30px;
  font-weight: 400;
  margin-bottom: 0.4375rem;
  font-family: Radio Canada;
  color: #515050;
  margin-bottom: 42px;
`;

export const Message = styled.p`
  font-family: Radio Canada;
  font-size: 23px;
  line-height: 28px;
  font-weight: normal;
  color: #1165BA;
`;

export const ListJobsContainer = styled.div`
  display: flex;
  max-width: 100vw;
  min-width: 80vw;
  gap: 20px;
  white-space: nowrap;
  overflow-x: scroll;
  margin: 20px;
  padding-left: 96px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
  & > * {
   
    width: 583px;
    flex-shrink: 0;
    height: 557px;
  }
`;

export const ListJobTitle = styled(FormTitle)`
  margin-top: 45px;
  padding-left: 126px;

`;