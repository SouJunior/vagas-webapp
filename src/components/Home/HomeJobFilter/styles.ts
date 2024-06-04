import styled, { css } from 'styled-components';
import devices  from '../../../pages/styles/devices';

export const FormWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;

    @media (max-width: 568px) {
        width: 420px;
        height: 37;
        position: relative;
        top: 135px;
        width: 320px;
        height: 37;
        margin-top: 110px;
        align-items: center;
        border-radius: 52px;
        border: 2px;
        padding: 2px 2px 2px 8px;
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
`;



export const Form = styled.form`
    display: flex;
    gap: 28px;
    position: relative;
    z-index: 997;
    width: 90%;
`;

export const Input = styled.input`
    width: 100%;
    height: 58px;
    border: 1.5px solid #515151;
    border-radius: 52px;
    padding: 0 56px;
    color: #515151;
    text-overflow: ellipsis;

    ::placeholder {
        margin-right: 190px;
    }

    :focus {
        outline-color: ${({ theme }) => theme.colors.primary};
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
    position: absolute;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 52px;
    color: #fff;
    right: 3px;
    height: 100%;
    width: 100%;
    max-height: 52px;
    max-width: 207px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    transition: all 0.2s;

    :hover {
        opacity: 0.8;
    }

    @media (max-width: 1000px) {
        max-width: 150px;
        max-height: 38px;
    }

    
`;
