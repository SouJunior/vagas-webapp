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
`;

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

    @media (min-width: 280px) {
        display: flex;
        max-width: 95%;
        height: 60%;
        align-items: center;
        justify-content: center;
        h2 {
            text-align: center;
            font-size: 1.3em;
            margin: 5px;
        }
        button {
            margin: 8px 12px 0 auto;
        }
        .email {
            width: 14%;
        }
        p {
            margin: 5px;
            font-size: 1em;
        }
        @media (min-width: 600px) {
            display: flex;
            max-width: 70%;
            height: 65%;
            align-items: center;
            justify-content: center;
            padding: 5px;
            h2 {
                text-align: center;
                font-size: 1.3em;
                margin: 5px;
            }

            .email {
                width: 12%;
            }
            p {
                margin: 5px;
                font-size: 0.8em;
            }
            button {
                margin: 4px 8px 0 auto;
            }
        }
        @media (min-width: 900px) {
            display: flex;
            max-width: 60%;
            height: 60%;
            align-items: center;
            justify-content: center;
            padding: 5px;
            h2 {
                text-align: center;
                font-size: 1.4em;
                margin: 5px;
            }

            .email {
                width: 12%;
            }
            p {
                margin: 5px;
                font-size: 1em;
            }
            button {
                margin: 8px 12px 0 auto;
            }
        }
        @media (min-width: 1200px) {
            display: flex;
            max-width: 50%;
            height: 50%;
            align-items: center;
            justify-content: center;
            padding: 5px;
            h2 {
                text-align: center;
                font-size: 1.4em;
                margin: 5px;
            }

            .email {
                width: 12%;
            }
            p {
                margin: 5px;
                font-size: 1em;
            }
            button {
                margin: 8px 12px 0 auto;
            }
        }
        @media (min-height: 640px) {
            display: flex;
            height: 45%;
            align-items: center;
            justify-content: center;
            padding: 5px;
            h2 {
                text-align: center;
                font-size: 1.4em;
                margin: 5px;
            }
        }
    }
`;
