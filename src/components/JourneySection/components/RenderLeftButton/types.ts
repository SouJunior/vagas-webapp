export interface LeftMenuItemsInterface {
    id: number;
    figure: React.ReactNode;
    title: string;
    intro: string;
    content: React.ReactNode;
}

export interface ButtonSetContentInterface {
    setContent: (component: React.ReactNode, newKey: string) => void;
    whichContent: string;
}
