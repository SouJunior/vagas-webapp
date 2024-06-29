import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 147px);
`;

export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid #046ad0;
    border-top: 4px solid #344054;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;
