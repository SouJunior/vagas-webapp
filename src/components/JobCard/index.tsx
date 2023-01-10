import {
    Description,
    Footer,
    Header,
    JobType,
    Text,
    Title,
    Wrapper,
    Button,
    Date,
} from './styles';
import {
    RiEditFill as PencilIcon,
    RiDeleteBin6Fill as DeleteIcon,
} from 'react-icons/ri';
import { JobData } from '../../pages/InsertJobs';

interface JobCardProps extends JobData {
    onDeleteJobCard: (id: string) => void;
}

export default function JobCard({
    id,
    title,
    description,
    jobType,
    createdAt,
    onDeleteJobCard,
}: JobCardProps) {
    return (
        <Wrapper
            id={id}
            className="shadow-md shadow-[#1a1a1a]/5 hover:shadow-md"
        >
            <Header>
                <div>
                    <Title className="block">{title}</Title>
                    <div className="flex items-center gap-[0.375rem]">
                        <JobType>{jobType}</JobType>
                        <span className="h-1 w-1 bg-gray-dark/70 rounded-full" />
                        <Date>{createdAt?.date}</Date>
                        <span className="h-1 w-1 bg-gray-dark/70 rounded-full" />
                        <Date>{createdAt?.hour}</Date>
                    </div>
                </div>
                <PencilIcon className="absolute right-12 hover:text-blue-500 text-[2.75rem] text-blue align-middle bg-blue-lighter border border-blue p-[0.4375rem] rounded" />
            </Header>
            <Description>
                <Text dangerouslySetInnerHTML={{ __html: description }}></Text>
            </Description>
            <Footer>
                <Button onClick={() => onDeleteJobCard(id)} type="button">
                    <DeleteIcon className="text-base" />
                    Remover
                </Button>
            </Footer>
        </Wrapper>
    );
}
