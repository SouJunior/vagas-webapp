import styled, { css } from 'styled-components';

interface HeaderProps {
    isActive: boolean;
    isMobileOpen: boolean;
}

interface ButtonsProps {
    isActive: boolean;
}

export const Header = styled.header<HeaderProps>`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.05);
    filter: ${({ isMobileOpen }) =>
        isMobileOpen ? 'none' : 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))'};
    gap: 12px;
    align-items: center;
    top: 0;
    background-color: #fff;
    justify-content: space-between;
    width: 100vw;
    padding: 20px;
    height: 132px;
    position: fixed;
    transition: height 0.3s ease-in-out;
    z-index: 998;

    @media (max-width: 1023px) {
        justify-content: flex-start;
    }

    ${({ isMobileOpen }) =>
        isMobileOpen &&
        css`
            height: 80px;
        `}

    ${({ isActive }) =>
        isActive &&
        css`
            background-color: #fff;
            height: 80px;
            padding: 20px;
            transition: height 0.3s ease-in-out;
        `}
`;

export const NavTitle = styled.div`
    color: white;
    display: flex;
    font-size: 44px;
    gap: 20px;
    font-weight: bold;
    place-self: center;
    transition: all 200ms ease-out;
    margin-right: 20px;

    img {
        margin-left: 38px;
    }
`;

export const HeaderBtns = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 835px) {
        display: none;
    }
`;

export const RegisterButton = styled.button<ButtonsProps>`
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    font-weight: 600;
    width: 262px;
    height: 52px;
    color: #fff;
    border-radius: 4px;

    :hover {
        opacity: 0.8;
    }

    ${({ isActive }) =>
        isActive
            ? css`
                  width: 220px;
                  height: 42px;
                  transition: all 300ms ease-in-out;
                  font-size: 16px;
              `
            : css`
                  width: 262px;
                  height: 52px;
                  transition: all 300ms ease-in-out;
              `}
`;

export const LoginButton = styled(RegisterButton)<ButtonsProps>`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    :hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: #fff;
    }
`;

export const MobileHeader = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255);
    position: fixed;
    z-index: 998;
    left: 0;
    top: 0;
    opacity: 0;
    animation: fadeIn 0.5s;
    animation-play-state: running;
    animation-fill-mode: both;
    transition: all 0.2s;

    @keyframes fadeIn {
        from {
            opacity: 0;
            height: 0px;
            transform: translateY(
                -100%
            ); /* Adicione esta linha para animar o translateY */
        }
        to {
            opacity: 1;
            height: 100vh;
            transform: translateY(
                0%
            ); /* Adicione esta linha para animar o translateY */
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 80%;

        li {
            text-transform: capitalize;
            font-size: 22pt;
            font-weight: 600;
            cursor: pointer;
            padding: 5px 15px;
            color: ${({theme}) => theme.colors.primary};
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

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            li {
                text-transform: uppercase;
                font-size: 35pt;
                font-weight: 600;
                cursor: pointer;
                padding: 5px 15px;
                color: black;
                display: flex;
                align-items: center;
                gap: 20px;
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

            .contact {
                background-color: ${({ theme }) => theme.colors.primary};
                border-radius: 12px;
                transition: 0.2s;
                background-image: none;
                display: flex;
                align-items: center;
                text-transform: uppercase;
                text-decoration: none;
                color: white;
                font-size: 28pt;
                font-weight: 600;
                margin-top: 3rem;
                padding: 1rem;
            }
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
