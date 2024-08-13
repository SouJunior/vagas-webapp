import styled from 'styled-components';


export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #666666;
    
    @media (max-width: 767px) {
        h2 {
            display: none;
        }
    }
`