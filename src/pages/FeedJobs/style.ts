import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 130px 64px;
    min-height: calc(100vh - 147px);
    max-width: 1440px;
    margin: 0 auto;
`;

export const SectionFilters = styled.section`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const SelectDate = {
    control: (provided: any) => ({
        ...provided,
        padding: '0 14px',
        borderRadius: '147px',
        border: '1px solid #c1dfff',
        background: '#fff',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '120%',
        color: '#475467',
        zIndex: '999',
    }),
    singleValue: (provided: any) => ({
        ...provided,
        zIndex: '999',
    }),
};

export const SectionJob = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 64px;
`;

export const ContainerAllJobs = styled.div`
    position: relative;
    flex: 1;
    height: 632px;
    overflow-y: auto;
`;

export const HeaderAllJobs = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    height: 60px;
    padding: 8px 12px;
    z-index: 100;
    background: #344054;
`;

export const AllJobsTitle = styled.h1`
    font-family: 'Radio Canada';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: #fff;
`;

export const AllJobsQuantity = styled.h2`
    font-family: 'Radio Canada';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: #fff;
    opacity: 0.9;

    strong {
        font-weight: 500;
        opacity: 1;
    }
`;

export const BoxJob = styled.div<ParahgraphType>`
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    padding: 12px;
    border: 1px solid #e8e8e8;
    cursor: pointer;
    ${({ isActive }) =>
        isActive &&
        css`
            background-color: #e7f0f8;
            box-shadow: inset 3px 0 0 #046ad0;
        `}
`;

export const CompanyImage = styled.img`
    width: 56px;
    height: 56px;
`;

export const JobInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ParagraphMd = styled.p`
    font-family: 'Radio Canada';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: ${({ color }) => color || '#003986'};
`;

interface ParahgraphType {
    color?: string;
    opacity?: string;
    weigth?: string;
    gap?: string;
    isActive?: boolean;
}

export const ParagraphSm = styled.p<ParahgraphType>`
    font-family: 'Radio Canada';
    font-size: 14px;
    font-weight: ${({ weigth }) => weigth || '400'};
    line-height: 120%;
    color: ${({ color }) => color || '#182230'};
    opacity: ${({ opacity }) => opacity || '1'};
`;

export const LabelSm = styled.p<ParahgraphType>`
    font-family: 'Radio Canada';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: ${({ color }) => color || '#003986'};
    opacity: ${({ opacity }) => opacity || '1'};
`;

export const ContainerSelectedJob = styled.div`
    position: relative;
    flex: 1.5;
`;

export const HeaderSelectedJob = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 16px;
    background: #e7f0f8;
`;

export const Button = styled.button`
    padding: 16px 24px;
    border-radius: 8px;
    background: #003986;
    font-family: 'Radio Canada';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: #fff;
    transition: 0.2s all ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

export const BoxHeaderSelectedJob = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const SubtitleSm = styled.h2`
    font-family: 'Radio Canada';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: #003986;
`;

export const InlineContent = styled.div<ParahgraphType>`
    display: flex;
    align-items: center;
    gap: ${({ gap }) => gap || '0'};
`;

export const SelectedJobContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 530px;
    padding: 24px 16px;
    border: 1px solid #e8e8e8;
    overflow-y: auto;
`;

export const IconWork = styled.img`
    width: 24px;
    height: 24px;
`;

export const Badge = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    border-radius: 500px;
    background: rgba(51, 138, 255, 0.5);
`;

export const List = styled.ul`
    margin-left: 12px;
    font-family: 'Radio Canada';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: #515050;
`;
