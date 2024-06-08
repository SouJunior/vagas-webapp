import { ParagraphMdProps } from './types';

import styled from 'styled-components';

export const ParagraphMd = styled.p<ParagraphMdProps>`
    font-family: 'Radio Canada';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: ${({ color }) => color || '#003986'};
    text-transform: ${({ transform }) => transform || 'none'};
`;
