import { ParagraphSmProps } from './types';

import styled, { css } from 'styled-components';

export const ParagraphSm = styled.p<ParagraphSmProps>`
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
