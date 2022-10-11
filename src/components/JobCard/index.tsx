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
} from "./styles";
import {
  RiEditFill as PencilIcon,
  RiDeleteBin6Fill as DeleteIcon,
} from "react-icons/ri";

interface JobCardProps {
  id: string;
  title: string;
  description: string;
  jobType: "Estágio" | "Trainee" | "Júnior" | "";
  deleteJobCard: (id: string) => void;
}

export default function JobCard({
  id,
  title,
  description,
  jobType,
  deleteJobCard,
}: JobCardProps) {
  return (
    <Wrapper className="hover:shadow-lg">
      <Header>
        <div className="ml-1">
          <Title>{title}</Title>
          <JobType backgroundColor={jobType}>
            {jobType}
            <Date>02/08/2022 17:23{/*Dados da data e hora irão aqui*/}</Date>
          </JobType>
        </div>
        <PencilIcon className="absolute right-12 hover:text-blue-500 text-[44px] text-blue align-middle bg-blue-lighter border-2 border-blue p-[6px] rounded" />
      </Header>
      <Description>
        <Text>{description}</Text>
      </Description>
      <Footer>
        <Button onClick={() => deleteJobCard(id)} type="button">
          <DeleteIcon className="text-base" />
          Remover
        </Button>
      </Footer>
    </Wrapper>
  );
}
