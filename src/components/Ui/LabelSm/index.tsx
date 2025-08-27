import type { LabelSmProps } from './types';

import * as S from './style';

const LabelSm: React.FC<LabelSmProps> = ({ children, color, opacity }) => {
  return (
    <S.LabelSm color={color} opacity={opacity}>
      {children}
    </S.LabelSm>
  );
};

export default LabelSm;
