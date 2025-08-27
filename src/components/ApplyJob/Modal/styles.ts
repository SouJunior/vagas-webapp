import styled from 'styled-components';

interface Props {
  buttonColors: string;
}

export const DialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`;

export const DialogBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 664px;
  z-index: 10000;
  border-radius: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  margin: 36px;

  p {
    margin-top: 20px;
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    max-width: 354px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const DialogHeader = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 32px;
  font-size: 28px;
  font-weight: 900;
  color: #f5f5f5;
  background-color: #3f51b5;
  border-radius: 24px 24px 0 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  width: 100%;
  color: #fff;
  place-self: end;
  margin-right: 40px;

  @media (max-width: 768px) {
    justify-content: center;
    place-self: center;
    padding-right: 5px;
    margin-right: 0px;
    padding-left: 5px;
  }
`;

export const Button = styled.button<Props>`
  margin-left: 8px;
  margin-bottom: 20px;
  padding: 3px 0;
  width: 100%;
  height: 100%;
  max-width: 182px;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(Props) => Props.buttonColors};

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
