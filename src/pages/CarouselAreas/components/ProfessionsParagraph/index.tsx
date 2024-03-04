import { ProfessionsStyle } from '../../../../@types/professions-style';

import * as S from './style';

const ProfessionsParagraph = ({ children, dark, left }: ProfessionsStyle) => {
    return (
        <S.TextProfessions dark={dark} left={left}>
            {children}
        </S.TextProfessions>
    );
};

export default ProfessionsParagraph;
