import styled from 'styled-components';

export const ProfilePicWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 0 0 0;

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
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin: 0 auto;
    gap: 16px;

    input[type='file']::-webkit-file-upload-button {
        visibility: hidden;
    }
    label:hover {
        text-decoration: underline;
    }
    p {
        color: #bababa;
        font-size: 0.7em;
    }
    .form__left {
        grid-column: 1 / 2;
        justify-self: end;
        margin-right: 50px;
    }

    .form__change {
        justify-self: end;
    }

    .form__right {
        grid-column: 2 / -1;
        margin-left: 50px;
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
    font-size: 35px;
    font-weight: 700;
    color: #046ad0;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const MainLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    padding-top: 20px;
`;

export const CurriculoWrapper = styled.div`
    position: relative;

    label {
        color: ${({ theme }) => theme.colors.black};
        font-size: 90%;
        font-weight: 500;
    }
    input[type='file']::-webkit-file-upload-button {
        visibility: hidden;
    }

    input {
        border: 1px solid ${({ theme }) => theme.colors.mutedDark};
        border-radius: 5px;

        box-sizing: border-box;
        outline: none;

        width: 100%;
        height: 55px;
        padding: 0.7rem 1rem;

        ::placeholder {
            color: ${({ theme }) => theme.colors.mutedDarker};
        }

        :hover {
            border-color: ${({ theme }) => theme.colors.mutedDarker};
        }

        :focus {
            border-color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const LoadCurriculum = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    padding-top: 30px;
`;
