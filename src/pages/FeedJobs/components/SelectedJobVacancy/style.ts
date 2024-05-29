import { InlineContentProps } from './types';

import styled from 'styled-components';

export const ContainerSelectedJob = styled.div`
    position: relative;
    flex: 1.5;
`;

export const HeaderSelectedJob = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 16px;
    background: #e7f0f8;
`;

export const BoxHeaderSelectedJob = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 450px;

    @media (max-width: 1280px) {
        max-width: 310px;
    }

    @media (max-width: 1024px) {
        width: 100%;
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
`;

export const InlineContent = styled.div<InlineContentProps>`
    display: flex;
    align-items: center;
    flex-wrap: ${({ inline }) => (inline ? 'nowrap' : 'wrap')};
    gap: ${({ gap }) => gap || '0'};
    overflow-x: auto;

    ::-webkit-scrollbar {
        display: none;
    }
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
