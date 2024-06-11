import { SubtitleSmProps } from './types';

import styled from 'styled-components';

export const SubtitleSm = styled.h2<SubtitleSmProps>`
    font-family: 'Radio Canada';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: #003986;
    text-transform: ${({ transform }) => transform || 'none'};

    @media (max-width: 767px) {
        font-size: 16px;
    }
`;
