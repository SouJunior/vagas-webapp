import styled, { css } from 'styled-components';

interface Props {
    isActive: boolean;
}

export const Header = styled.header<Props>`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.05);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
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

    ${({ isActive }) =>
        isActive &&
        css`
            height: 38px;
            background-color: #fff;
            height: 100px;
            padding: 20px;
            left: 50%;
            transform: translateX(-50%);
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

export const RegisterButton = styled.button<Props>`
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

export const LoginButton = styled(RegisterButton)<Props>`
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
