import { useState } from 'react';
import {
    ApplyButton,
    ButtonContainer,
    CancelApplyButton,
    Content,
    FilterContainer,
    JobApplyContainer,
    JobDetailsWrapper,
    PageTitle,
    ResumeContainer,
    ResumePreview,
    UserArea,
    Wrapper,
} from './styles/ApplyJobs.styles';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import JobApplyDetails from '../components/ApplyJob/JobApplyDetails';
import ChooseResume from '../components/ApplyJob/ChooseResume';
import { useQuery } from 'react-query';
import Modal from '../components/ApplyJob/Modal';
import FeedSearch from '../components/FeedVagas/FeedSearch';

const JobApply = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [selectedResume, setSelectedResume] = useState<any>('');

    const api = useApi();
    const { id }: any = useParams();
    const navigate = useNavigate();

    const { data: jobData, isLoading: isLoadingJob } = useQuery({
        queryKey: ['job'],
        queryFn: () => api.getJobById(id),
    });

    const { data: resumeData, isLoading: isLoadingCurriculos } = useQuery({
        queryKey: ['resumes'],
        queryFn: () => api.getUserCurriculum(localStorage.getItem('authToken')),
    });

    const handleResumeClick = (resume: any) => {
        setSelectedResume(resume);
    };

    function OpenCancelDialog() {
        setShowDialog(true);
    }

    function HandleCancel() {
        setShowDialog(false);
    }

    function HandleConfirm() {
        navigate('/jobs');
    }

    return (
        <JobApplyContainer>
            <Header pageName="Feed de Vagas" backTo={'/jobs'}></Header>
            <Content>
                <FilterContainer>
                    <div>
                        <FeedSearch onSearch={HandleConfirm} />
                    </div>
                </FilterContainer>
                <Wrapper>
                    <PageTitle>Match de Vagas</PageTitle>
                    <UserArea>
                        <ResumeContainer>
                            <ChooseResume
                                data={resumeData}
                                setSelectedResume={handleResumeClick}
                            />
                            {selectedResume && (
                                <ResumePreview>
                                    <iframe
                                        src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                                            selectedResume.file,
                                        )}&embedded=true`}
                                        width="484"
                                        height="700"
                                        title="teste"
                                        allowFullScreen
                                    ></iframe>
                                </ResumePreview>
                            )}
                        </ResumeContainer>
                        <JobDetailsWrapper>
                            <JobApplyDetails
                                Job={jobData}
                                isLoading={isLoadingJob}
                            />
                            <ButtonContainer>
                                <CancelApplyButton onClick={OpenCancelDialog}>
                                    Cancelar
                                </CancelApplyButton>
                                <ApplyButton>Me Candidatar</ApplyButton>
                            </ButtonContainer>
                        </JobDetailsWrapper>
                    </UserArea>
                </Wrapper>
            </Content>

            {showDialog && (
                <Modal
                    title="CANCELAR?"
                    confirmText="Sim"
                    cancelText="Não"
                    handleCancel={HandleCancel}
                    handleConfirm={HandleConfirm}
                    buttonColors={{
                        confirmButton: '#BD0000',
                        cancelButton: '#149911',
                    }}
                >
                    Você deseja cancelar a sua candidatura?
                </Modal>
            )}
        </JobApplyContainer>
    );
};

export default JobApply;
