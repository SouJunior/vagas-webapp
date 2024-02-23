import { ProfessionsStyle } from '../../../../@types/professions-style';

import * as S from './style';

const ProfessionsSubtitle = ({ children, dark }: ProfessionsStyle) => {
    return <S.SubtitleStyle dark={dark}>{children}</S.SubtitleStyle>;
};

export default ProfessionsSubtitle;
