import styled from "styled-components";

export const Wrapper = styled.header`
    position: relative;

    label {
        position: relative;
        background-color: #ecf5ff;
        padding: 9px 10px 9px 20px;
        border: 1px solid #c1dfff;
        border-radius: 6px;
        min-width: 300px;
        display: flex;

        input[type="text"] {
            background-color: transparent;
            width: auto;
            outline: none;
            margin-left: 40px;
            display: flex;
        }
        img {
            position: absolute;
            right: 0px;
            top: 0px;
            background-color: #ecf5ff;
            padding: 10px 10px 10px 5px;
            border-radius: 0px 6px 6px 0px;
        }
        span {
            position: absolute;
            left: 10px;
            top: 9px;
            font-weight: 700;
            color: #4e4e4e;
        }
    }
`;

