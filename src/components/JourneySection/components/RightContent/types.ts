interface Paragraph {
    text?: string;
    sub?: string;
}

export interface RightContentProps {
    content: {
        id: number;
        contentIcon: JSX.Element;
        content: Paragraph[];
    };
}
