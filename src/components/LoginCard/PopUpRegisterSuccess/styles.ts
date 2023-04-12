import styled from 'styled-components';

export const Popup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 620px;

    position: absolute;

    top: 25%;
    left: 25%;

    border: 2px solid #1165ba;
    border-radius: 10px;
    background: #fdfffc;

    .email {
        width: 22%;
        margin: 13px;
    }

    button {
        margin: 16px 24px 0 auto;
        cursor: default;
    }

    h2 {
        color: #1165ba;
        font-size: 1.9em;
        font-weight: 600;
        margin: 45px 0 16px 0;
    }

    p {
        text-align: center;
        color: #5d5f5d;
        font-size: inherit;
        font-weight: bold;
        margin: 0 90px 70px 90px;
    }
`;
