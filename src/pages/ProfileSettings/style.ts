import styled from 'styled-components';

export const ProfilePicWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 0 0;

    input[type='file']::-webkit-file-upload-button {
        visibility: hidden;
    }

    input[type='file']::before {
        content: 'Alterar foto';
        display: inline-block;
        color: #1165ba;
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        text-decoration: underline;
        width: 100%;
        text-align: center;
        margin-top: 8px;
        font-size: 0.9em;
        font-weight: 500;
        cursor: pointer;
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

export const Form = styled.form<{ charQtde: number }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin: 0 auto;
    gap: 16px;

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

    .form__textarea {
        textarea {
            border: 1px solid #e8e8e8;
            border-radius: 6px;
            padding: 0.7rem 0 0 1rem;
            width: 100%;
            height: 250px;
            resize: none;
            outline: none;
            border: 2px solid
                ${(props) =>
                    props.charQtde < 0
                        ? ({ theme }) => theme.colors.danger
                        : ({ theme }) => theme.colors.mutedDark};

        }
        ::placeholder {
            color: ${({ theme }) => theme.colors.mutedDarker};
        }
    }

    span {
        font-weight: 500;
        color: ${(props) =>
            props.charQtde < 0
                ? ({ theme }) => theme.colors.danger
                : ({ theme }) => theme.colors.black};
    }
`;
