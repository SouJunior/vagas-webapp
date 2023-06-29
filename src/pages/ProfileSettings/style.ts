import styled from 'styled-components';

export const ProfileImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 0 0;

    img {
        margin-bottom: 8px;
    }

    /* input[type='file']::-webkit-file-upload-button {
        visibility: hidden;
    } */

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
        color: ${({theme}) => theme.colors.danger};
        display: ${(props: any) => (props.color > 5000000 ? 'block' : 'none')};
    }
    & > p {
        color: #bababa;
        padding-bottom: 4px;
        font-size: 0.8em;
    }
`;

export const Form = styled.div<{ charQtde: number }>`
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
            border: 1px solid
                ${(props) =>
                    props.charQtde < 0
                        ? ({ theme }) => theme.colors.danger
                        : ({ theme }) => theme.colors.mutedDark};
            color: ${({ theme }) => theme.colors.primaryDark};
            border-radius: 6px;
            padding: 0.7rem 0 0 1rem;
            width: 100%;
            height: 250px;
            resize: none;
            outline: ${(props) => (props.charQtde < 0 ? 'none' : 'default')};

            :hover {
                border-color: ${({ theme }) => theme.colors.mutedDarker};
            }

            :focus {
                border-color: ${(props) =>
                    props.charQtde < 0
                        ? ({ theme }) => theme.colors.danger
                        : ({ theme }) => theme.colors.primaryDark};
            }

            ::placeholder {
                color: ${({ theme }) => theme.colors.mutedDarker};
            }
        }
    }

    span {
        font-weight: 500;
        color: ${(props) =>
            props.charQtde < 0
                ? ({ theme }) => theme.colors.danger
                : ({ theme }) => theme.colors.mutedDarker};
    }
`;
