import { useEffect, useState } from 'react';
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
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import JobApplyDetails from '../components/ApplyJob/JobApplyDetails';
import ChooseResume from '../components/ApplyJob/ChooseResume';
import { useQuery } from 'react-query';
import Modal from '../components/ApplyJob/Modal';

const JobApply = () => {
    const [showDialog, setShowDialog] = useState(false);

    const api = useApi();
    const { id }: any = useParams();
    const navigate = useNavigate();

    const { data, isLoading } = useQuery({
        queryKey: ['job'],
        queryFn: () => api.getJobById(id),
    });

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
                        <JobFilter />
                    </div>
                </FilterContainer>
                <Wrapper>
                    <PageTitle>Match de Vagas</PageTitle>
                    <UserArea>
                        <ChooseResume />
                        <JobDetailsWrapper>
                            <JobApplyDetails Job={data} isLoading={isLoading} />
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
