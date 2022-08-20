import styled from "styled-components";

interface NavbarTypeProps {
    logo: string;
    inputs: JSX.Element;
    button: JSX.Element;
}

export const Header = styled.header`
    top: 0;
    position: fixed;
    width: 100vw;
    min-height: 59px;
    background-color: white;

    .nav__filter {
        border-top: 1px solid #e0edfd;
        height: 53px;
        box-shadow: 0px 2px 5px 0px #1b1e2114;

        .nav__filter-area {
            width: 70vw;
            margin: 0 auto;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            div > select {
                text-align: center;
                background-color: white;
                border: 1px solid #c1dfff;
                height: 30px;
                width: 160px;
                left: 445px;
                top: 71px;
                border-radius: 100px;
                padding: 9px, 9px, 9px, 14px;
                line-height: 16.94px;
                color: #515050;
                font-weight: 400;
                font-size: 14px;

                &:hover {
                    background-color: #ecf5ff;
                }
                &::-ms-expand {
                    display: none;
                }
            }
        }
    }
`;

export const Nav = styled.nav`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 70vw;
    justify-content: space-between;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Text = styled.p`
    word-wrap: break-word;
`;

