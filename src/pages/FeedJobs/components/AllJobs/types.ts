import { JobsProps } from '../../types';

export interface AllJobsProps {
    isActive?: boolean;
    searchTerm?: string;
    currentJobs?: JobsProps[];
    selectedJob?: JobsProps | null;
    handleClick?: (value: string) => void;
}
