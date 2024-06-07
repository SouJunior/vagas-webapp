import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 130px 64px 64px 64px;
    min-height: calc(100vh - 147px);
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        padding: 130px 32px 32px 32px;
    }
`;

export const SectionFilters = styled.section`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const SectionJob = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 64px;

    @media (max-width: 1024px) {
        gap: 32px;
    }
`;

export const ContainerAllJobs = styled.div`
    position: relative;
    flex: 1;
    height: 632px;
    overflow-y: auto;

    @media (max-width: 767px) {
        height: auto;
        overflow-y: hidden;
    }
`;
