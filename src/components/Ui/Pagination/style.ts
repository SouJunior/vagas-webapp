import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 8px;
  padding: 0 4px;
  overflow: hidden;
`;

export const PaginationButton = styled.button<{ isActive?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${({ isActive }) => (isActive ? '#007bff' : '#ffffff')};
  border: 1px solid #007bff;
  border-radius: 5px;
  font-size: 16px;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#007bff')};
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#0056b3' : '#f0f0f0')};
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    border-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
