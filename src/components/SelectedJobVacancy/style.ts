import { InlineContentProps, LocationValue } from './types';

import styled from 'styled-components';

export const ContainerSelectedJob = styled.div<LocationValue>`
    position: relative;
    flex: 1.5;
    height: ${({ location }) => (location ? 'auto' : '632px')};

    .last-button {
        display: none;
    }

    @media (max-width: 767px) {
        .first-button {
            display: none;
        }

        .last-button {
            display: block;
        }
    }
`;

export const HeaderSelectedJob = styled.div<LocationValue>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    position: sticky;
    top: ${({ location }) => (location ? '79px' : '0')};
    z-index: 20;
    min-height: 102px;
    padding: 16px;
    background: #e7f0f8;

    @media (max-width: 767px) {
        height: auto;
        gap: 8px;
        padding: 8px 0px;
        background: #fff;
        border-bottom: 1px solid #dedede;
    }
`;

export const BoxHeaderSelectedJob = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 450px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-all;
    overflow: hidden;

    @media (max-width: 1280px) {
        max-width: 310px;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 767px) {
        white-space: wrap;
        word-wrap: normal;
        overflow: auto;
    }
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

    @media (max-width: 1280px) {
        padding: 12px 20px;
    }

    @media (max-width: 1024px) {
        padding: 12px;
        font-size: 14px;
    }

    @media (max-width: 767px) {
        margin-top: 32px;
        width: 100%;
        padding: 16px 24px;
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
    }
`;

export const InlineContent = styled.div<InlineContentProps>`
    display: flex;
    align-items: center;
    flex-wrap: ${({ inline }) => (inline ? 'nowrap' : 'wrap')};
    gap: ${({ gap }) => gap || '0'};
    overflow-x: auto;
    transition: display 0.3s ease-in-out;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 767px) {
        transition: display 0.3s ease-in-out;

        &.hidden {
            display: none;
        }
    }
`;

export const SelectedJobContent = styled.div<LocationValue>`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: ${({ location }) => (location ? 'auto' : '530px')};
    padding: 24px 16px;
    border: 1px solid #e8e8e8;
    overflow-y: auto;

    @media (max-width: 767px) {
        gap: 8px;
        padding: 16px 0;
        border: none;
    }
`;

export const IconWork = styled.img`
    width: 24px;
    height: 24px;
`;

export const BoxDescriptionText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 512px;
    line-height: 140%;
`;
