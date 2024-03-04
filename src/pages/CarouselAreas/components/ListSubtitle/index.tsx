import { ProfessionsStyle } from '../../../../@types/professions-style';

import * as S from './style';

const ListSubtitle = ({ children, dark, left }: ProfessionsStyle) => {
    return (
        <S.ListItem dark={dark} left={left}>
            <li>{children}</li>
        </S.ListItem>
    );
};

export default ListSubtitle;
