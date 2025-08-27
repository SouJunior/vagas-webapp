import type { AllJobsProps } from './types';
import styled, { css } from 'styled-components';

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
  border: 1px solid #e8e8e8;
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

  @media (max-width: 1023px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const JobInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
