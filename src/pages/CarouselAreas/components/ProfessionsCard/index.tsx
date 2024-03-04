import { ProfessionsStyle } from '../../../../@types/professions-style';

import * as S from './style';

const ProfessionsCard = ({ children, color, icon }: ProfessionsStyle) => {
    return (
        <S.Card color={color} icon={icon}>
            {children}
        </S.Card>
    );
};

export default ProfessionsCard;
