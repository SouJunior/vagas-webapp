import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 200px;
    margin-top: 80px;

    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 8px;
        padding: 0 20px;
    }
`;

export const Input = styled.input`
    width: 400px;
    height: 48px;
    padding: 15.5px 28px;
    border-radius: 40px;
    border: 1px solid #1165ba;
    font-family: 'Inter', 'sans-serif';
    font-size: 14px;
    color: #696969;

    :focus {
        outline-color: #1165ba;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    width: 182px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 40px;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;
