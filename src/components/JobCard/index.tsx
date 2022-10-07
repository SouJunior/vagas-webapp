import {
  Description,
  Footer,
  Header,
  JobType,
  Text,
  Title,
  Wrapper,
} from "./styles";
import { BsPencilSquare as PencilIcon } from "react-icons/bs";

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
    <Wrapper className="rounded-md border p-5 mb-4 hover:shadow-lg cursor-pointer">
      <Header className="pb-4 border-b-2 flex gap-2 items-center">
        <Title className="text-xl">{title}</Title>
        <JobType
          backgroundColor={jobType}
          className="rounded-full px-3 text-white"
        >
          {jobType}
        </JobType>
        <PencilIcon className="absolute right-5 hover:text-orange-500 text-xl" />
      </Header>
      <Description className="py-4 border-b-2">
        <Text className="text-justify">{description}</Text>
      </Description>
      <Footer className="pt-4">
        <button
          onClick={() => deleteJobCard(id)}
          type="button"
          className="rounded font-semibold bg-red-500 text-white px-2 py-1 text-sm hover:bg-red-700 active:bg-red-500 focus:ring focus:ring-red-300"
        >
          Remover vaga
        </button>
      </Footer>
    </Wrapper>
  );
}
