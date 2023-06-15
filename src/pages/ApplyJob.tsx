import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import {
    ApplyButton,
    ButtonContainer,
    CancelApplyButton,
    Content,
    FilterContainer,
    JobApplyContainer,
    JobDetailsWrapper,
    PageTitle,
    UserArea,
    Wrapper,
} from './styles/ApplyJobs.styles';
import JobFilter from '../components/JobFilter';
import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import JobApplyDetails from '../components/ApplyJob/JobApplyDetails';
import ChooseResume from '../components/ApplyJob/ChooseResume';

const JobApply = () => {
    const [job, setJob] = useState();

    const api = useApi();
    const { id }: any = useParams();

    useEffect(() => {
        async function getJobById() {
            const jobData = await api.getJobById(id);
            setJob(jobData);
        }
        getJobById();
    }, []);

    return (
        <JobApplyContainer>
            <Header pageName="Feed de Vagas" backTo={'/jobs'}></Header>
            <Content>
                <FilterContainer>
                    <div>
                        <JobFilter />
                    </div>
                </FilterContainer>
                <Wrapper>
                    <PageTitle>Match de Vagas</PageTitle>
                    <UserArea>
                        <ChooseResume />
                        <JobDetailsWrapper>
                            <JobApplyDetails Job={job} />
                            <ButtonContainer>
                                <CancelApplyButton>Cancelar</CancelApplyButton>
                                <ApplyButton>Me Candidatar</ApplyButton>
                            </ButtonContainer>
                        </JobDetailsWrapper>
                    </UserArea>
                </Wrapper>
            </Content>
        </JobApplyContainer>
    );
};

export default JobApply;
