interface Paragraph {
    text?: string;
    sub?: string;
}

export interface ContentProps {
    id: number;
    figure: JSX.Element;
    title: string;
    intro: string;
    contentIcon: JSX.Element;
    content: Paragraph[];
}
