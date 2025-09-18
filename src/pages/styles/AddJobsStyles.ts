import styled from 'styled-components';
import { RiInformationLine } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  gap: 62px;
  margin-top: 6.1875rem;
  width: 100%;
  max-width: 79rem;
  margin: 0.5rem;
  border-bottom: 1px solid #e8e8e8;
  border-top: 1px solid #e8e8e8;
`;

export const HeaderContainer = styled.div`
  margin-top: 106px;
  width: 100%;
`;

export const LogoImage = styled.img`
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 315px;
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
  min-height: 655px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.08);
  border-radius: 6px;
  padding: 24px;
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

export const NoJobsContainer = styled.div`
  margin-top: 32px;
  width: 599px;
  height: 655px;
  border: 2px dashed #1165ba;
  border-radius: 0.375rem;
  text-align: center;
  padding: 6rem;
`;

export const PreviewContainer = styled.div`
  border: 1px solid #e8e8e8;
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
  border: 1px solid #1165ba;
  border-radius: 50%;
  width: 10.625rem;
  padding: 36px;
`;

export const Icon = styled(RiInformationLine)`
  font-size: 6rem;
  color: #1165ba;
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
  color: #1165ba;
`;
