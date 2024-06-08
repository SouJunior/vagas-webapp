export interface InlineContentProps {
    gap: string;
    inline?: boolean;
}

export interface SelectedJobVacancyProps {
    selectedJob: {
        title: string;
        company: string;
        location: string;
        created_date: string;
        link: string;
        description: string;
    };
}
