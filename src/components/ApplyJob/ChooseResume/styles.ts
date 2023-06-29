import styled from "styled-components";

export const ChooseResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    border-radius: 6px;
    width: 100%;
    max-width: 484px;
    height: 110px;
    max-height: 110px;
    padding: 18px 40px;
    font-size: 16px;
    font-weight: 500;
    color: #515050;
    gap: 10px;
`;

export const Attach = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
    
    :hover {
        color: ${props => props.theme.colors.primaryDark};
    }

    p {
        text-decoration: underline;
        font-weight: 400;
        color: ${props => props.theme.colors.primary};

        :hover {
            color: ${props => props.theme.colors.primaryDark};
        }
    }
`;