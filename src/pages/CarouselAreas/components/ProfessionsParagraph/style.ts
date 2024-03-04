import { ProfessionsStyle } from '../../../../@types/professions-style';

import styled from 'styled-components';

export const TextProfessions = styled.p<ProfessionsStyle>`
    margin-left: ${(props) => props.left || '0'};
    font-family: 'Radio Canada';
    font-size: 16px;
    font-weight: 500;
    line-height: 160%;
    color: ${(props) => (props.dark ? '#323232' : '#fff')};
    opacity: 0.8;
`;
