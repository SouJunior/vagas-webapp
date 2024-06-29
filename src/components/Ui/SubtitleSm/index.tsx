import { SubtitleSmProps } from './types';

import * as S from './style';

const SubtitleSm: React.FC<SubtitleSmProps> = ({ children, transform }) => {
    return <S.SubtitleSm transform={transform}>{children}</S.SubtitleSm>;
};

export default SubtitleSm;
