interface Paragraph {
    text: string;
}

export interface RightContentProps {
    content: {
        id: number;
        contentIcon: JSX.Element;
        content: Paragraph[];
    };
}
