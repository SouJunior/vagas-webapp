import {
  ApplyButton,
  ApplyButtonLink,
  CompanyInfo,
  CompanyLogoImg,
  CompanyName,
  Container,
  JobHead,
  JobHeadText,
  Subtitle,
  Text,
  TextContainer,
  Title,
} from './styles';

function JobDetails({ id, clickedJob }: { id: any; clickedJob: any }) {
  if (Array.isArray(clickedJob)) {
    clickedJob = Object.assign({}, ...clickedJob);
  }

  return (
    <Container>
      <JobHead>
        <JobHeadText>
          <Title>{clickedJob?.title} </Title>
          <Subtitle>
            {clickedJob?.modality} - {clickedJob?.type} -{' '}
            {clickedJob?.typeContract}
          </Subtitle>
          <Text>{clickedJob.contractType}</Text>
        </JobHeadText>
        <ApplyButtonLink
          to={`/apply/${clickedJob.id}?search=${clickedJob.title}`}
        >
          <ApplyButton>Candidate-se</ApplyButton>
        </ApplyButtonLink>
      </JobHead>
      <CompanyInfo>
        <CompanyLogoImg>
          {clickedJob.company.profile === null ? (
            <img src="/assets/profile-image.svg" alt="Default" />
          ) : (
            <img
              src={clickedJob.company.profile}
              alt={clickedJob.company.companyName}
            />
          )}
        </CompanyLogoImg>
        <CompanyName>{clickedJob.company.companyName}</CompanyName>
      </CompanyInfo>

      <TextContainer>
        <Text>{clickedJob?.description}</Text>
        <Text>{clickedJob?.prerequisites}</Text>
        <Text>
          R${clickedJob?.salaryMin} - R$
          {clickedJob?.salaryMax}
        </Text>
        <Text>
          {clickedJob?.city}/{clickedJob?.federalUnit}
        </Text>
        <Text>{clickedJob?.affirmativeType}</Text>
      </TextContainer>
    </Container>
  );
}

export default JobDetails;
