import { SortSelectProps } from './types';

import * as S from './style';

const Select: React.FC<SortSelectProps> = ({ onSortChange, sortOrder }) => {
    return (
        <S.SelectBox>
            <S.Select
                defaultValue={'default'}
                onChange={(e) => onSortChange(e.target.value)}
                value={sortOrder}
            >
                <S.Option value="default" disabled>
                    Filtrar por:
                </S.Option>
                <S.Option value="Mais Recentes">Mais recentes</S.Option>
                <S.Option value="Mais Antigos">Mais antigos</S.Option>
            </S.Select>
        </S.SelectBox>
    );
};

export default Select;
