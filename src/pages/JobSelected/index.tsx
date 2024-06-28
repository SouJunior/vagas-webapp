import { useParams } from 'react-router-dom';

import SelectedJobVacancy from '../../components/SelectedJobVacancy';
import useJobs from '../../hooks/useJobs';

import * as S from './style';
import Loading from '../../components/Loading';

const JobSelected = () => {
    const { jobs, loading } = useJobs();
    const { id } = useParams();

    if (loading) {
        return <Loading />;
    }

    const job = jobs.find((item) => item.id === id);

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <S.Container>
            <SelectedJobVacancy selectedJob={job} />
        </S.Container>
    );
};

export default JobSelected;
