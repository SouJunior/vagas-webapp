import ArrowDropDown from '../../assets/imgs/arrow-drop-down.svg';

import styled, { css } from 'styled-components';

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

export const SelectBox = styled.div`
    z-index: 40;
    padding-right: 16px;
    border-radius: 147px;
    border: 1px solid #c1dfff;
    background: url(${ArrowDropDown}) no-repeat right transparent;
    background-position: calc(100% - 10px) center;

    select {
        padding: 8px 14px;
        border: none;
        border-radius: 0;
        outline: none;
        background: transparent;
        font-size: 14px;
        font-weight: 600;
        line-height: 120%;
        color: #475467;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
    }

    option {
        font-size: 14px;
        font-weight: 600;
        line-height: 120%;
        color: #475467;
    }

    option:first-child {
        display: none;
    }
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
    flex: 1;
    width: 56px;
    height: 56px;
`;

export const JobInfo = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ParagraphMd = styled.p<ParahgraphType>`
    font-family: 'Radio Canada';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: ${({ color }) => color || '#003986'};
    text-transform: ${({ transform }) => transform || 'none'};
`;

interface ParahgraphType {
    color?: string;
    opacity?: string;
    weigth?: string;
    gap?: string;
    isActive?: boolean;
    transform?: string;
    inline?: boolean;
    description?: boolean;
}

export const ParagraphSm = styled.p<ParahgraphType>`
    font-family: 'Radio Canada';
    font-size: 14px;
    font-weight: ${({ weigth }) => weigth || '400'};
    line-height: 120%;
    color: ${({ color }) => color || '#182230'};
    opacity: ${({ opacity }) => opacity || '1'};

    ${({ description }) =>
        description &&
        css`
            max-width: 513px;
            margin-bottom: 16px;
            line-height: 140%;
        `}
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

export const SubtitleSm = styled.h2<ParahgraphType>`
    font-family: 'Radio Canada';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: #003986;
    text-transform: ${({ transform }) => transform || 'none'};
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
