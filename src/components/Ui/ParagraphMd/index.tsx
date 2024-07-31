import { ParagraphMdProps } from './types';

import * as S from './style';

const ParagraphMd: React.FC<ParagraphMdProps> = ({
    children,
    color,
    transform,
}) => {
    return (
        <S.ParagraphMd color={color} transform={transform}>
            {children}
        </S.ParagraphMd>
    );
};

export default ParagraphMd;
