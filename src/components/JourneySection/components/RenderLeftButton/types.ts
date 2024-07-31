interface ContentProps {
    id: number;
    figure: JSX.Element;
    title: string;
    intro: string;
}

export interface RenderLeftButtonsMenuProps {
    content: ContentProps[];
    expandedItemId: number;
    onItemClick: (id: number) => void;
    isMobile? : boolean;
    selectedContent? : any;
}
