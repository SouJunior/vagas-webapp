import { JobApplyDetailsContainer } from './styles';
import ProfileDefault from '../../../assets/imgs/profile-image.svg';
import {
    CompanyInfo,
    CompanyLogoImg,
    CompanyName,
    Subtitle,
    Text,
    TextContainer,
    Title,
} from '../../JobDetails/styles';

const JobApplyDetails = ({ Job, isLoading }: any) => {

    return (
        <JobApplyDetailsContainer>
            {isLoading ? (
                <Title>Carregando...</Title>
            ) : (
                <>
                    <Title>{Job?.title} </Title>

                    <Subtitle>
                        {Job?.modality} - {Job?.type} - {Job?.typeContract}
                    </Subtitle>

                    <Text>{Job?.contractType}</Text>

                    <CompanyInfo>
                        <CompanyLogoImg>
                            {ProfileDefault === null ? (
                                <img src={ProfileDefault} alt="Default" />
                            ) : (
                                <img
                                    src={Job?.company?.profile}
                                    alt={Job?.company?.companyName}
                                />
                            )}
                        </CompanyLogoImg>
                        <CompanyName>{Job?.company?.companyName}</CompanyName>
                    </CompanyInfo>

                    <TextContainer>
                        <Text>{Job?.description}</Text>
                        <Text>{Job?.prerequisites}</Text>
                        <Text>
                            R${Job?.salaryMin} - R$
                            {Job?.salaryMax}
                        </Text>
                        <Text>
                            {Job?.city}/{Job?.federalUnit}
                        </Text>
                        <Text>{Job?.affirmativeType}</Text>
                    </TextContainer>
                </>
            )}
        </JobApplyDetailsContainer>
    );
};

export default JobApplyDetails;
