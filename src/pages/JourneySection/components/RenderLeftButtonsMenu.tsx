import { useState, useRef } from 'react';

import {
    FigureBox,
    ItemDescription,
    ItemSubtitle,
    ItemTitle,
    MenuItem,
    LeftMenu,
    ContainerContentMobile,
    CenterMobile,
} from './styles';

import { curriculoItems } from '../ItemsList/CurriculoItems';
import { linkedinItems } from '../ItemsList/LinkedinItems';

interface LeftMenuItemsInterface {
    id: number;
    figure: React.ReactNode;
    title: string;
    intro: string;
    content: React.ReactNode;
}

interface ButtonSetContentInterface {
    setContent: (component: React.ReactNode, newKey: string) => void;

    whichContent: string;
}

const RenderLeftButtonsMenu: React.FC<ButtonSetContentInterface> = ({
    setContent,
    whichContent,
}) => {
    const [activeItemId, setActiveItemId] = useState(1);
    const scrollToNewcomponent = useRef<HTMLDivElement>(null);

    return (
        <>
            {whichContent === 'linkedinButton' ? (
                <LeftMenu>
                    {linkedinItems.map((item: LeftMenuItemsInterface) => (
                        <MenuItem
                            isActive={item.id === activeItemId}
                            key={item.id}
                            onClick={() => {
                                setActiveItemId(item.id);
                                setContent(item.content, `content-${item.id}`);
                            }}
                        >
                            <CenterMobile>
                                <FigureBox>{item.figure}</FigureBox>
                                <ItemDescription>
                                    <ItemTitle>{item.title}</ItemTitle>
                                    <ItemSubtitle>{item.intro}</ItemSubtitle>
                                </ItemDescription>
                            </CenterMobile>
                            <ContainerContentMobile>
                                {item.content}
                            </ContainerContentMobile>
                        </MenuItem>
                    ))}
                </LeftMenu>
            ) : (
                <LeftMenu>
                    {curriculoItems.map((item: LeftMenuItemsInterface) => (
                        <MenuItem
                            isActive={item.id === activeItemId}
                            key={item.id}
                            onClick={() => {
                                setActiveItemId(item.id);
                                setContent(item.content, `content-${item.id}`);
                                scrollToNewcomponent.current?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                });
                            }}
                        >
                            <CenterMobile>
                                <FigureBox>{item.figure}</FigureBox>
                                <ItemDescription>
                                    <ItemTitle>{item.title}</ItemTitle>
                                    <ItemSubtitle>{item.intro}</ItemSubtitle>
                                </ItemDescription>
                            </CenterMobile>
                            <ContainerContentMobile>
                                {item.content}
                            </ContainerContentMobile>
                        </MenuItem>
                    ))}
                </LeftMenu>
            )}
        </>
    );
};

export default RenderLeftButtonsMenu;
