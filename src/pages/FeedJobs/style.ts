import styled, { css } from 'styled-components';
import type { AllJobsProps } from './components/AllJobs/types';

interface ContainerProps {
  noPadding?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: ${(props) =>
    props.noPadding ? '50px 64px 64px 64px' : '130px 64px 64px 64px'};
  min-height: calc(100vh - 147px);
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: ${(props) =>
      props.noPadding ? '40px 32px 32px 32px' : '130px 32px 32px 32px'};
  }

  @media (max-width: 767px) {
    padding: ${(props) =>
      props.noPadding ? '35px 32px 32px 32px' : '96px 32px 32px 32px'};
  }
`;

export const SectionFilters = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SectionJob = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 64px;

  @media (max-width: 1024px) {
    gap: 32px;
  }
`;

export const ContainerAllJobs = styled.div`
  position: relative;
  flex: 1;
  height: 632px;
  overflow-y: auto;

  @media (max-width: 767px) {
    height: auto;
    overflow-y: hidden;
  }
`;

export const HeaderAllJobs = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: 8px 12px;
  z-index: 100;
  background: #344054;
`;

export const AllJobsTitle = styled.h1`
  font-family: 'Radio Canada';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  color: #fff;
`;

export const AllJobsQuantity = styled.h2`
  font-family: 'Radio Canada';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  color: #fff;
  opacity: 0.9;

  strong {
    font-weight: 500;
    opacity: 1;
  }
`;

export const BoxJob = styled.div<AllJobsProps>`
  display: flex;
  gap: 8px;
  padding: 12px;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #e7f0f8;
      box-shadow: inset 3px 0 0 #046ad0;
    `}
`;

export const CompanyImage = styled.img`
  flex: 1;
  width: 56px;
  height: 56px;
`;

export const JobInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
