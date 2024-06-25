import styled, { css } from 'styled-components';

interface HeaderProps {
    isActive: boolean;
    isMobileOpen: boolean;
    feedJob: boolean;
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

    @media (max-width: 559px) {
        height: auto;
        padding: 12px 0;
    }

    ${({ feedJob }) =>
        feedJob &&
        css`
            border: none;
            filter: none;

            section {
                @media (max-width: 559px) {
                    flex-direction: column;
                    gap: 16px;
                }
            }
        `}

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

export const Return = styled.button`
    position: absolute;
    top: 7px;
    left: 38px;
    padding: 4px;
    border-radius: 66px;
    background: #eff3f9;
`;

export const BoxLogo = styled.figure`
    img {
        width: 217px;
        height: 32px;
        cursor: pointer;

        @media (max-width: 767px) {
            width: 180px;
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
    padding: 8px, 16px, 8px, 16px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.primary};
    color : #fff;
    border: 1px solid #046ad0;
    border-radius: 4px;

    ${({ isActive }) =>
        isActive
            ? css`
                  width: 262px;
                  height: 42px;
                  transition: all 300ms ease-in-out;
                  font-size: 16px;
              `
            : css`
                  width: 262px;
                  height: 35px;
                  transition: all 300ms ease-in-out;
              `}
`;

export const LoginButton = styled(RegisterButton)<ButtonsProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    color: ${({ theme }) => theme.colors.primary};

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
        flex-direction: column;
        justify-content: space-between;
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
            justify-content: center;
            width: 80%;
            margin-top: 24px;
          
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

export const BoxLogoMobile = styled.div`
        margin-top: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

export const Menu = styled.div`
    display: none;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 835px) {
        display: flex;
        /* margin-left: 2rem; */
    }
`;
