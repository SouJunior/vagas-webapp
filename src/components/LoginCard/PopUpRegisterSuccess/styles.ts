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
    padding: 10px;

    width: 90%;
    max-width: 520px;

    position: absolute;

    border: 2px solid #1165ba;
    border-radius: 10px;
    background: #fdfffc;

    @media (max-height: 500px) {
        max-height: 360px;
    }

    .email {
        width: 22%;
        margin: 13px;

        @media (max-height: 500px) {
            width: 10%;
        }
    }

    button {
        margin: 16px 24px 0 auto;
        cursor: default;
        z-index: 999;

        @media (max-height: 500px) {
            width: 5%;
        }
    }

    h2 {
        text-align: center;
        color: #1165ba;
        font-size: 1.9em;
        font-weight: 600;
        margin: 45px 0 16px 0;

        @media (max-height: 500px) {
            font-size: 20px;
        }
    }

    p {
        color: #5d5f5d;
        font-size: inherit;
        font-weight: bold;
        padding: 40px;

        @media (max-width: 280px) {
            padding-bottom: 20px;
            padding-left: 6px;
            padding-right: 6px;  
        }

        @media (max-height: 500px) {
            font-size: 12px;
        }
    }
`;