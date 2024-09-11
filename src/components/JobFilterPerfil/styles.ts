import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 100%;

    @media (max-width: 1280px) {
        .location {
            display: none;
        }
    }

    @media (max-width: 1024px) {
        gap: 8px;
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const BoxInput = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 256px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    position: relative;
    width: 100%;
    height: 45px;
    padding: 0 16px 0 40px;
    border: 1px solid #c1dfff;
    background: #eff3f9;
    border-radius: 42px;
    font-size: 14px;
    line-height: 120%;
    color: #666666;
    outline: none;

    :focus {
        outline-color: #1165ba;
    }

    @media (max-width: 767px) {
        height: 36px;
    }
`;

export const BtnIcon = styled.button`
    position: absolute;
    left: 14px;
`;

// export const Button = styled.button`
//     width: 116px;
//     height: 45px;
//     border: none;
//     border-radius: 24px;
//     background: #003986;
//     font-family: 'Radio Canada';
//     font-size: 14px;
//     line-height: 140%;
//     color: #fff;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;

//     &:hover {
//         opacity: 0.8;
//     }

//     @media (max-width: 1024px) {
//         display: none;
//     }
// `;