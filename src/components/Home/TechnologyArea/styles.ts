import styled from 'styled-components';

interface AreaNameProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 6px;
  width: 120px;
  height: 100px;
  border-radius: 8px;
  margin-right: 8px;
  // background-color: ${({ theme }) => theme.colors.primary};

  &.open {
    background-color: #d6e7ff;
  }

  &.closed {
    background-color: #1165ba;
  }

  @media (max-width: 420px) {
    margin-right: 15px !important;
  }
`;

export const IconImage = styled.div<AreaNameProps>`
  width: 32px;
  place-items: center;
  color: ${(props) => (props.active ? '#046AD0' : '#FFF')};
  font-size: 36px;
`;

export const AreaName = styled.p<AreaNameProps>`
  font-size: 14px;
  color: ${(props) => (props.active ? '#046AD0' : 'white')};
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 6px;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;
`;

export const ModalTitle = styled.h1`
  font-size: 24px;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 30px;
  border-radius: 6px;
  width: 100%;
  max-width: 920px;
  word-wrap: break-all;
  height: 76%;
  overflow-y: auto;
`;

export const ModalDescriptions = styled.p`
  margin-top: 28px;
  word-wrap: break-all;
  text-align: justify;
`;

export const ModalSource = styled.p`
  margin-top: 28px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-all;
  overflow: hidden;

  a {
    text-decoration: underline;
    color: blue;
    font-weight: 500;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 19px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
