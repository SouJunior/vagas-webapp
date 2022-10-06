import {
  Description,
  Footer,
  Header,
  JobType,
  Text,
  Title,
  Wrapper,
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
    <Wrapper className="rounded-md border p-6 mb-4 hover:shadow-lg cursor-pointer shadow-md">
      <Header className="p-4 border-[1px] rounded-md flex gap-2 items-center">
        <div className="ml-1">
          <Title className="text-[26px] font-semibold text-gray-darker">
            {title}
          </Title>
          <JobType
            backgroundColor={jobType}
            className="text-gray-darker text-base font-semibold"
          >
            {jobType}
          </JobType>
        </div>
        <PencilIcon className="absolute right-12 hover:text-orange-500 text-[44px] text-blue align-middle bg-blue-lighter border-2 border-blue p-[6px] rounded" />
      </Header>
      <Description className="px-6 py-4 border-b-[1px] text-gray-darker text-sm">
        <Text className="text-justify">{description}</Text>
      </Description>
      <Footer className="pt-4">
        <button
          onClick={() => deleteJobCard(id)}
          type="button"
          className="rounded px-16 gap-1 m-1 border-[1px] border-[#930000] py-3 align-middle items-center flex font-semibold bg-[#BD0000] text-white text-sm hover:bg-red-600 active:bg-red-600 focus:ring focus:ring-red-300"
        >
          <DeleteIcon className="text-base" />
          Remover
        </button>
      </Footer>
    </Wrapper>
  );
}
