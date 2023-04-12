import {
    Description,
    Footer,
    Header,
    JobType,
    Text,
    Title,
    Wrapper,
    Button,
    DateText,
    PreviewField,
    DescriptionPreview,
    WrapperPreview,
    Divider,
} from './styles';
import {
    RiEditFill as PencilIcon,
    RiDeleteBin6Fill as DeleteIcon,
} from 'react-icons/ri';
import { JobData } from '../../pages/InsertJobs';
import format from 'date-fns/format';

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
    type,
    salaryMin,
    salaryMax,
    prerequisites,
    contractType,
    benefits,
    affirmative,
    affirmativeType,
    modality,
    headquarters,
}: any) {
    const NewDate: any = format(new Date(createdAt), 'dd/MM/yyyy - HH:mm');

    return (
        <WrapperPreview
            id={id}
            className="shadow-md shadow-[#1a1a1a]/5 hover:shadow-md"
        >
            <Header>
                <div>
                    <Title className="block">{title}</Title>
                    <div className="flex items-center gap-[0.375rem]">
                        <JobType className="text-[1.125rem]">{type}</JobType>
                        <span className="h-1 w-1 bg-gray-dark/70 rounded-full" />
                        <DateText>{NewDate}</DateText>
                    </div>
                </div>
                <PencilIcon className="absolute right-12 hover:text-blue-500 text-[2.75rem] text-blue align-middle bg-blue-lighter border border-blue p-[0.4375rem] rounded" />
            </Header>
            <DescriptionPreview>
                <Text dangerouslySetInnerHTML={{ __html: description }}></Text>
            </DescriptionPreview>
            <PreviewField>
                Faixa Salarial: de {salaryMin} a {salaryMax}
            </PreviewField>
            <span>
                <PreviewField>Pré-requisitos:</PreviewField>
                <PreviewField>{prerequisites}</PreviewField>
            </span>
            <PreviewField>{contractType}</PreviewField>
            {benefits === null ? null : (
                <PreviewField>Benefícios: {benefits}</PreviewField>
            )}
            {affirmative === 'false' ? null : (
                <PreviewField>
                    Grupo Minoritário: {affirmativeType}
                </PreviewField>
            )}
            <PreviewField>
                {modality} - {headquarters}
            </PreviewField>

            <Footer>
                <Divider />
                <Button onClick={() => onDeleteJobCard(id)} type="button">
                    <DeleteIcon className="text-base" />
                    Remover
                </Button>
            </Footer>
        </WrapperPreview>
    );
}
