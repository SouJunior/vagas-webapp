export interface Paragraph {
    text: string;
}

export interface JourneyResponsiveProps {
    id: number;
    figure: React.ReactNode;
    title: string;
    content: Paragraph[];
}

export interface Props {
    data: JourneyResponsiveProps[];
}