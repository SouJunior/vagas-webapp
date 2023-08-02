import styled from 'styled-components';

export const MaskBackground = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(93, 95, 93, 0.3);
    backdrop-filter: blur(7px);

    top: 0;
    left: 0;
`

export const Popup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 620px;

    position: absolute;

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
        z-index: 999;
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