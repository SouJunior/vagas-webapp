import { CompanyLogo } from './CompanyLogo';
import {
    ApplyButton,
    Benefits,
    Company,
    CompanyInfo,
    CompanyLogoImg,
    CompanyName,
    Container,
    Description,
    DescriptionInfo,
    Location,
    Prerequisites,
    Subtitle,
    Text,
    TextContainer,
    Title,
    Type,
} from './styles';
import { Link } from 'react-router-dom';

function JobDetails({ id, clickedJob }: { id: any; clickedJob: any }) {
    if (Array.isArray(clickedJob)) {
        clickedJob = Object.assign({}, ...clickedJob);
    }

    return (
        <Container>
            <Title>
                {clickedJob?.title}{' '}
                <Link to={`/apply/${clickedJob.id}`}>
                    <ApplyButton>Me candidatar</ApplyButton>
                </Link>
            </Title>

            <Subtitle>
                {clickedJob?.modality} - {clickedJob?.type} -{' '}
                {clickedJob?.typeContract}
            </Subtitle>

            <Text>{clickedJob.contractType}</Text>

            <CompanyInfo>
                <CompanyLogoImg>
                    <CompanyLogo />
                </CompanyLogoImg>
                <CompanyName>Autofalante Mkt</CompanyName>
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
