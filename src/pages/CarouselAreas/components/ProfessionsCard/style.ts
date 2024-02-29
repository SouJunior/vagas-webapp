import { ProfessionsStyle } from '../../../../@types/professions-style';

import styled from 'styled-components';

export const Card = styled.div<ProfessionsStyle>`
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.icon ? 'justify-content: center; align-items: center;' : ''}
    gap: 24px;
    width: 100%;
    min-height: 284px;
    padding: 40px 24px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: ${(props) => props.color};
`;
