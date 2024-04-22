import styled, { css } from 'styled-components';

interface ToggleButtonInterface {
    isActive: boolean;
}

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 64px;
    max-width: 1234px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 20px;
    }
`;

export const ContainerContentMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const LeftMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
`;
export const MenuItem = styled.button<{ isActive: boolean }>`
    padding: 14px;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out, border-left 0.5s ease-in-out;

    div{
        background: '#FFF'

        &:hover {
            background: #E7F0F8;
        }
    }

    &:hover {
    background-color: #E7F0F8;
    transform: scale(1.05);
  }

  ${({ isActive }) =>
      isActive &&
      css`
          background-color: #e7f0f8;
          border-left: solid 3px #046ad0;

          @media (max-width: 768px) {
              background-color: transparent;
              border-left: 0px;
          }
      `}

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    pointer-events: none;
  }
`;

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
`;

export const ItemTitle = styled.h2`
    color: var(--colors-gray-light-mode-900, #101828);
    text-align: justify;
    font-family: 'Radio Canada';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
`;

export const ItemSubtitle = styled.p`
    color: var(--colors-gray-light-mode-700, #344054);
    font-family: 'Radio Canada';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-align: left;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const FigureBox = styled.div`
    display: flex;
    padding: 12px 13px;
    flex-direction: column;
    align-items: center;
    width: 48px;
    hight: 48px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;

export const RightText = styled.div`
    color: var(--colors-gray-light-mode-700, #344054);
    text-align: justify;
    font-family: 'Radio Canada';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    flex: 1;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const AnimatedContent = styled.div`
    animation: slideDown 0.7s ease-in-out;

    @keyframes slideDown {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

export const ToggleButtonSection = styled.div`
    display: flex;
    margin: 32px 0 32px;
    justify-content: center;
    align-items: flex-start;
    gap: -1px;
`;

export const ToggleButton = styled.button<ToggleButtonInterface>`
    width: 108px;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 0px 100px 100px 0px;
    background-color: ${(props) => (props.isActive ? '#046AD0' : '#FFF')};
    border: 1px solid var(--Neutral-neutral-30, #c2c7d0);
    padding: 10px 12px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    color: ${(props) => (props.isActive ? '#FFF' : '#046AD')};
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
`;

export const LinkedinButton = styled(ToggleButton)`
    justify-content: flex-end;
    border-radius: 100px 0px 0px 100px;
`;

export const CurriculoButton = styled(ToggleButton)`
    justify-content: flex-start;
    border-radius: 0px 100px 100px 0px;
    border-left: 0;
`;

export const CenterMobile = styled.div`
    display: flex;
    gap: 18px;
    align-items: flex-start;

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: solid 1px #046ad0;
        padding-bottom: 16px;
        margin-bottom: 16px;
    }
`;
