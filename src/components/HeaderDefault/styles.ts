import styled, { css } from 'styled-components';

interface HeaderProps {
    isActive: boolean;
    isMobileOpen: boolean;
}

interface ButtonsProps {
    isActive: boolean;
}

export const Header = styled.header<HeaderProps>`
    position: fixed;
    top: 0;
    width: 100%;
    height: 132px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background-color: #fff;
    z-index: 999;
    transition: height 0.3s ease-in-out;
    filter: ${({ isMobileOpen }) =>
        isMobileOpen ? 'none' : 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))'};

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        width: 100%;
        max-width: 1440px;
        height: 100%;
        padding: 24px;
        margin: 0 auto;

        @media (max-width: 1440px) {
            padding: 0 64px;
        }

        @media (max-width: 768px) {
            padding: 0 32px;
        }
    }

    ${({ isMobileOpen }) =>
        isMobileOpen &&
        css`
            height: 80px;
        `}

    ${({ isActive }) =>
        isActive &&
        css`
            height: 80px;
            transition: height 0.3s ease-in-out;
        `}
`;

export const BoxLogo = styled.figure`
    img {
        width: 217px;
        height: 32px;

        @media (max-width: 450px) {
            width: 124px;
            height: 18px;
        }
    }
`;

export const HeaderBtns = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 835px) {
        display: none;
    }
`;

export const RegisterButton = styled.button<ButtonsProps>`
    width: 262px;
    height: 52px;
    padding: 8px, 16px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};

    :hover {
        border: 1px solid #046ad0;
        border-radius: 4px;
    }

    ${({ isActive }) =>
        isActive
            ? css`
                  width: 110px;
                  height: 42px;
                  transition: all 300ms ease-in-out;
                  font-size: 16px;
              `
            : css`
                  width: 122px;
                  height: 35px;
                  transition: all 300ms ease-in-out;
              `}
`;

export const LoginButton = styled(RegisterButton)<ButtonsProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        display: flex;
    }

    img {
        width: 16px;
        margin-right: 10px;
    }
`;

export const MobileHeader = styled.nav`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 998;

    .background {
        width: 100vw;
        height: 100vh;
        position: absolute;
        backdrop-filter: blur(8px);
        z-index: -1;
    }

    @media (min-width: 835px) {
        .background {
            display: none;
        }
    }

    @media (max-width: 320px) {
        width: 40px;
        height: 40px;
    }

    .wrapper {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        align-items: center;
        width: 350px;
        height: 100vh;
        background-color: rgba(255, 255, 255);
        position: fixed;
        left: 0;
        top: 0;
        opacity: 0;
        animation: fadeIn 0.5s;
        animation-play-state: running;
        animation-fill-mode: both;
        transition: all 0.2s;

        @media (max-width: 700px) {
            width: 80vw;
        }

        @media (max-width: 500px) {
            width: 90vw !important;
        }

        @media (max-width: 330px) {
            width: 100vw !important;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                height: 0px;
                transform: translateX(
                    -100%
                ); /* Adicione esta linha para animar o translateY */
            }
            to {
                opacity: 1;
                height: 100vh;
                transform: translateX(
                    0%
                ); /* Adicione esta linha para animar o translateY */
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 30px;
            gap: 20px;
            width: 80%;

            li {
                text-transform: capitalize;
                font-size: 22pt;
                font-weight: 600;
                cursor: pointer;
                padding: 5px 15px;
                color: ${({ theme }) => theme.colors.primary};
                display: flex;
                align-items: center;
                gap: 8px;
                background-image: linear-gradient(
                    ${({ theme }) => theme.colors.primary},
                    ${({ theme }) => theme.colors.primary}
                );
                background-size: 0% 3px;
                background-repeat: no-repeat;
                transition: background-size 0.3s;
                margin: 5px 0;
                background-position: 50% calc(100% - 0px);
                :hover {
                    background-size: 100% 3px;
                }
            }
        }

        @media (min-width: 835px) {
            display: none;
        }
    }
`;

export const Menu = styled.div`
    display: none;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 835px) {
        display: flex;
        /* margin-left: 2rem; */
    }
`;
