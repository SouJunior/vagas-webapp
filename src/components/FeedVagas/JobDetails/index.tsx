import {
    Benefits,
    Company,
    Container,
    Description,
    DescriptionInfo,
    ExtraInfoContainer,
    ExtraInfoItem,
    Location,
    PaddingContainer,
    Prerequisites,
    Title,
    Type,
} from './styles';
import { Link } from 'react-router-dom';

function JobDetails({
    id,
    clickedJob,
    companyData,
}: {
    id: any;
    clickedJob: any;
    companyData: any;
}) {
    if (Array.isArray(clickedJob)) {
        clickedJob = Object.assign({}, ...clickedJob);
    }

    return (
        <Container>
            <div>
                <PaddingContainer>
                    {clickedJob?.title && <Title>{clickedJob.title}</Title>}
                    {clickedJob?.title && <Company>Empresa Verde</Company>}
                    {clickedJob?.title && (
                        <Location>
                            {clickedJob.city}/{clickedJob.federalUnit}, Brasil
                        </Location>
                    )}
                    {clickedJob?.modality &&
                        clickedJob?.type &&
                        clickedJob?.typeContract && (
                            <Type>
                                {clickedJob.modality} - {clickedJob.type} -{' '}
                                {clickedJob.typeContract}
                            </Type>
                        )}
                </PaddingContainer>

                <ExtraInfoContainer>
                    <ExtraInfoItem colorActive={false}>
                        {clickedJob.contractType}
                    </ExtraInfoItem>
                    <ExtraInfoItem colorActive={false}>
                        {companyData?.companyName}
                    </ExtraInfoItem>
                    <ExtraInfoItem colorActive={false}>
                        {'51-200 funcionários'}
                    </ExtraInfoItem>
                    <ExtraInfoItem colorActive={true}>
                        <Link to="">{'Recrutando agora'}</Link>
                    </ExtraInfoItem>
                </ExtraInfoContainer>

                <PaddingContainer>
                    {
                        <DescriptionInfo>
                            {clickedJob.description}
                        </DescriptionInfo>
                    }
                </PaddingContainer>
            </div>
        </Container>
    );
}

export default JobDetails;
