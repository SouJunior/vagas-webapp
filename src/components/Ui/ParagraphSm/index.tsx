import { ParagraphSmProps } from './types';

import * as S from './style';

const ParagraphSm: React.FC<ParagraphSmProps> = ({
    children,
    weight,
    color,
    opacity,
    description,
}) => {
    return (
        <S.ParagraphSm
            color={color}
            weight={weight}
            opacity={opacity}
            description={description}
        >
            {children}
        </S.ParagraphSm>
    );
};

export default ParagraphSm;
