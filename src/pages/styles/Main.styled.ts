import styled from 'styled-components';

export const AchorLink = styled.button`
    color: #fff;
    font-weight: 500;
    font-size: 1.3em;
    text-decoration: underline;
    flex-grow: 1;
`;

export const MainHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 99999;
    position: fixed;

    .main {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 835px) {
        .link {
            display: none;
        }
    }

    @media (max-width: 700px) {
        justify-content: center;


        .ham-menu {
            position: absolute;
            left: 20px;
        }

        .main {
            flex-direction: column;
            text-align: center;

            h2 {
                font-weight: 700;
            }
        }
    }
`