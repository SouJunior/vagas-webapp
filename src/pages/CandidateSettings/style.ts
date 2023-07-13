import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    justify-content: center;
    gap: 25px;

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
    gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr; /* Duas colunas */
    }

    @media (max-width: 767px) {
       grid-template-columns: 1fr; /* Apenas uma coluna */
    }

    input[type='file']::-webkit-file-upload-button {
        visibility: hidden;
    }


    p {
        color: #bababa;
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
        outline: none;

        width: 85%;
        height: 55px;
        padding: 0.7rem 1rem;

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
    justify-content: center;
    align-self: center;
    padding-top: 50px;
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
