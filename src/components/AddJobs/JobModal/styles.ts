import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 900px;
  max-height: 500px;
  background-color: white;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 50px;
  font-weight: 600;
  color: #515050;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 45px;
  margin-top: 50px;
`;

export const ViewJobButton = styled.button`
  background-color: #008cba;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

export const BackButton = styled(ViewJobButton)`
  background-color: transparent;
  color: #1165ba;
  border: 1px solid #1165ba;
`;
