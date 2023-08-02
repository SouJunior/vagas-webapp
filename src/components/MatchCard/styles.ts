import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-radius: 6px;
    border: 2px dashed ${props => props.theme.colors.mutedDark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6px 20px;
    text-align: left;

    h1 {
        font-weight: 700;
        font-size: 1rem;
    }

    p {
        font-size: 0.8rem;
    }
`;
