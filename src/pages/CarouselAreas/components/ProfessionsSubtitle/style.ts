import { ProfessionsStyle } from '../../../../@types/professions-style';

import styled from 'styled-components';

export const SubtitleStyle = styled.h2<ProfessionsStyle>`
    font-family: 'Radio Canada';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    color: ${(props) => (props.dark ? '#323232' : '#fff')};
`;
