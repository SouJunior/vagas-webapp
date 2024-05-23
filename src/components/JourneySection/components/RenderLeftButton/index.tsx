import { RenderLeftButtonsMenuProps } from './types';

import * as S from './styles';

const RenderLeftButtonsMenu: React.FC<RenderLeftButtonsMenuProps> = ({
    content,
    expandedItemId,
    onItemClick,
}) => {
    return (
        <S.LeftMenu>
            {content.map((item) => (
                <S.MenuItem
                    key={item.id}
                    onClick={() => onItemClick(item.id)}
                    isActive={expandedItemId === item.id}
                >
                    <S.FigureBox>{item.figure}</S.FigureBox>
                    <S.ItemDescription>
                        <S.ItemTitle>{item.title}</S.ItemTitle>
                        <S.ItemSubtitle>{item.intro}</S.ItemSubtitle>
                    </S.ItemDescription>
                </S.MenuItem>
            ))}
        </S.LeftMenu>
    );
};

export default RenderLeftButtonsMenu;
