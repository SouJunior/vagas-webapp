import React, { useState, useRef } from 'react';

import { curriculoItems } from '../../ItemsList/CurriculoItems';
import { linkedinItems } from '../../ItemsList/LinkedinItems';

import { ButtonSetContentInterface, LeftMenuItemsInterface } from './types';

import * as S from './styles';

const RenderLeftButtonsMenu: React.FC<ButtonSetContentInterface> = ({
    setContent,
    whichContent,
}) => {
    const [activeItemId, setActiveItemId] = useState(1);
    const scrollToNewcomponent = useRef<HTMLDivElement>(null);

    const handleMenuItemClick = (item: LeftMenuItemsInterface) => {
        setActiveItemId(item.id);
        setContent(item.content, `content-${item.id}`);
        scrollToNewcomponent.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const menuItems =
        whichContent === 'linkedinButton' ? linkedinItems : curriculoItems;

    return (
        <S.LeftMenu>
            {menuItems.map((item: LeftMenuItemsInterface) => (
                <S.MenuItem
                    isActive={item.id === activeItemId}
                    key={item.id}
                    onClick={() => handleMenuItemClick(item)}
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
