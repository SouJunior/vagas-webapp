import styled, { css } from 'styled-components';
import devices from '../../../pages/styles/devices';

export const FormWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;

    @media (max-width: 568px) {
        height: 37px;
        position: relative;
        top: 35px;
        height: 37;
        margin-top: 20px;
        align-items: center;
        border-radius: 52px;
        border: 2px;
        padding: 2px 2px 2px 8px;
    }

    @media (max-width: 375px) {
        width: 300px;
        position: relative;
        left: -150px;
        top: 50px;
    }

    @media (max-width: 320px) {
        width: 287px;
        height: 37px;
        border: 2px;
        position: relative;
        top: 160px;
        left: -56px;
    }

    @media (max-width: 415px) {
        position: relative;
        left: -75px;
        width: 350px;
        top: 100px;
        left: -40px;
    }

    @media (max-width: 375px) {
        width: 300px;
        position: relative;
        left: -150px;
    }

    @media ${devices.mobileS} {
        position: absolute;
        left: -88px;
        top: 14rem;
    }
    :focus {
        outline-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 28px;
    position: relative;
    z-index: 997;
    background-color: #fff;
    border: 1.5px solid #515151;
    border-radius: 52px;
    @media (max-width: 1000px) {
        width: 90%;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 58px;
    padding: 0 56px;
    color: #515151;
    background-color: transparent;
    text-overflow: ellipsis;

    ::placeholder {
        margin-right: 190px;
    }

    @keyframes initialAnimation {
        from {
            width: 620px;
            opacity: 0;
        }

        to {
            width: 576px;
            opacity: 1;
        }
    }

    @media (max-width: 1000px) {
        height: 42px;
        padding: 0 20px;

        ::placeholder {
            margin-right: 150px;
        }
    }
`;

export const SearchButton = styled.button`
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 52px;
    padding: 12px 24px;
    color: #fff;
    height: 100%;
    width: 45%;
    max-height: 52px;
    max-width: 207px;
    opacity: 1;
    transition: all 0.2s;

    :hover {
        opacity: 0.8;
    }

`;
