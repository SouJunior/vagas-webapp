import styled from "styled-components";

export const JobApplyDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    width: 100%;
    max-width: 546px;
    height: 747px;
    max-height: 747px;
    padding: 28px 20px 30px 28px;
    overflow-y: auto;
`;