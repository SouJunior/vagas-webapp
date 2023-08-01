import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Spacing = styled.p`
    margin-bottom: 20px;
`

export const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    justify-content: center;
    gap: 25px;
    margin-top: 50px;

    @media (max-width: 540px) {
        flex-direction: column;
        align-items: center;
    }

`
export const ErrorMessages = styled.p`
    color: ${({ theme }) => theme.colors.danger};
    font-size: 0.7rem;
    line-height: 0;
    margin-bottom: 16px;
`

export const ProfilePicWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 0 0;

    input[type='file']::-webkit-file-upload-button {
        visibility: hidden;
    }

    label {
        color: #1165ba;
        cursor: pointer;
    }

    label:hover {
        text-decoration: underline;
    }

    input[type='file' i] {
        display: none;
    }

    span {
        color: red;
        font-size: 0.8em;
        display: none;
    }
    & > p {
        color: #bababa;
        font-size: 0.7em;
    }
`;

export const Form = styled.div`
    display: grid;
    justify-items: center;
    width: 80%;
    margin: 0 auto;
    gap: 15px;
    
    @media (min-width: 941px) {
        display: flex;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        gap: 150px;
    }

    @media (max-width: 940px) {
       grid-template-columns: 1fr;
    }

    @media (min-width: 540px) {
        input {
            width: 387px;
        }
    }

    input[type='file']::-webkit-file-upload-button {
        visibility: hidden;
    }

    p {
        font-size: 0.7em;
    }

    .form__left,
    .form__right {
        max-width: 387px;
        text-align: left;
    }

    .form__divider {
        grid-column: 1 / -1;
    }
`;
export const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: #046ad0;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
`;

export const CurriculoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.mutedDarker};
    font-size: 90%;
    font-weight: 500;

    @media (max-width: 280px) {
        width: 230px;
        height: 100%;
    }

    p {
        margin-top: 12px;
    }

    div {
        display: flex;
        gap: 5px;
    }
    
    input[type='file' i] {
        visibility: hidden;
    }

    label {
        border: 1px solid ${({ theme }) => theme.colors.mutedDark};
        border-radius: 5px;
        box-sizing: border-box;
        width: 85%;
        height: 55px;
        padding: 0.7rem 1rem;

        @media (max-width: 280px) {
            width: 270px;
            height: 100%;
        }

        :hover {
            border-color: ${({ theme }) => theme.colors.mutedDarker};
        }

        :focus {
            border-color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const CurriculumLink = styled.a`
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 10px;
`;

export const Trash = styled.div`
    width: 55px;
    height: 55px;
    border: 1px solid #c1292e;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    background-size: cover;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const ExtraLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 60px;
    padding-bottom: 50px;
`;

export const Required = styled.sup`
    color: ${({ theme }) => theme.colors.danger}; 
`
