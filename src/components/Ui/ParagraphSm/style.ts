import type { ParagraphSmProps } from './types';

import styled, { css } from 'styled-components';

export const ParagraphSm = styled.p<ParagraphSmProps>`
  font-family: 'Radio Canada';
  font-size: 14px;
  font-weight: ${({ weight }) => weight || '400'};
  line-height: 120%;
  color: ${({ color }) => color || '#182230'};
  opacity: ${({ opacity }) => opacity || '1'};

  ${({ description }) =>
    description &&
    css`
      max-width: 513px;
      line-height: 140%;
    `}
`;
