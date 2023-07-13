import styled from 'styled-components';

interface Props {
    type: string;
}

export const HeadRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    justify-content: space-between;

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            font-size: 0.8rem;
            background-color: rgb(76, 175, 80);
            color: #fff;
            padding: 5px;
            width: 80px;
            margin: 0 15px;
            border-radius: 8px;
            text-align: center;
        }
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 700;
    }

    h4 {
    }

    .jobModel {
        text-transform: uppercase;
        margin-top: 20px;
        font-weight: 500;
    }
`;

export const HeadColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AboutColumn = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.08);
    border: 1px solid #e8e8e8;
    width: 100%;
    padding: 5px 20px;
    border-radius: 8px;
    font-size: 0.9rem;

    .recruiting {
        color: ${(props) => props.theme.colors.primary};
        font-weight: 500;
    }
`;

export const DescriptionContainer = styled.div`
    width: 95%;
`;

export const OptionsBtn = styled.div<Props>`
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    padding: 8px 10px;
    background-color: ${(props) =>
        props.type == 'edit'
            ? props.theme.colors.primary
            : props.theme.colors.danger};
    color: #fff;
    margin-top: 5px;
    font-weight: 700;
    font-size: 0.8rem;
    text-align: center;
    cursor: pointer;
`;

export const JobInfoContainer = styled.div`
    display: flex;
    width: 600px;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.primary};
    padding: 24px 16px;
    border-radius: 6px;
    gap: 20px;
`;
