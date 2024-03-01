import { ProfessionsStyle } from '../../../../@types/professions-style';

import styled from 'styled-components';

export const ListItem = styled.ul<ProfessionsStyle>`
    margin-left: ${(props) => props.left || '0'};

    li {
        font-family: Radio Canada;
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        color: ${(props) => (props.dark ? '#323232' : '#fff')};
        margin-bottom: 24px;
    }

    ::marker {
        font-size: 34px;
        margin-right: 5px;
    }
`;
