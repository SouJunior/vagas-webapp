import type { LabelSmProps } from './types';

import styled from 'styled-components';

export const LabelSm = styled.p<LabelSmProps>`
  font-family: 'Radio Canada';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: ${({ color }) => color || '#003986'};
  opacity: ${({ opacity }) => opacity || '1'};
`;
