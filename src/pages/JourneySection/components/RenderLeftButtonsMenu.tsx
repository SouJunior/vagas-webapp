import { useState } from 'react';
import {
    FigureBox,
    ItemDescription,
    ItemSubtitle,
    ItemTitle,
    MenuItem,
    LeftMenu,
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
                            <FigureBox>{item.figure}</FigureBox>
                            <ItemDescription>
                                <ItemTitle>{item.title}</ItemTitle>
                                <ItemSubtitle>{item.intro}</ItemSubtitle>
                            </ItemDescription>
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
                            }}
                        >
                            <FigureBox>{item.figure}</FigureBox>
                            <ItemDescription>
                                <ItemTitle>{item.title}</ItemTitle>
                                <ItemSubtitle>{item.intro}</ItemSubtitle>
                            </ItemDescription>
                        </MenuItem>
                    ))}
                </LeftMenu>
            )}
        </>
    );
};

export default RenderLeftButtonsMenu;
