import styled from 'styled-components';

interface Props {
  type: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  position: absolute;
`;

export const ModalWrapper = styled.div`
  height: auto;
  z-index: 1;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
`;

export const ModalHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  height: 60px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0 20px;

  img {
    width: 30% !important;
  }
`;

export const ModalRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  gap: 20px;
`;

export const ModalColumn = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.2rem;
    font-weight: 900;
  }

  .job-title {
    color: ${(props) => props.theme.colors.mutedDarker};
  }

  form {
    margin: 5px 0;
  }
`;

export const Option = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  cursor: pointer !important;
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #ccc;
  border-radius: 0.4rem;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  animation: progress 3s linear;
  animation-fill-mode: forwards;
  transform-origin: left;
  transform: scaleX(0);
  width: 100%;
  border-radius: 0.4rem;
  @keyframes progress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
`;

export const Success = styled.div`
  font-size: 1.4rem;
  font-weight: 900;
  padding: 30px;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
`;

export const Btn = styled.div<Props>`
  background-color: ${(props) =>
    props.type == 'confirm'
      ? props.theme.colors.primary
      : props.theme.colors.danger};

  color: #fff;
  font-weight: 900;
  padding: 5px 15px;
  border-radius: 8px;
  cursor: pointer;
`;
