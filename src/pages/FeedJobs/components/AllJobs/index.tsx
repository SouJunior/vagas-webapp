import Cognito from '../../../../assets/imgs/cognito.svg';

import LabelSm from '../../../../components/Ui/LabelSm';
import ParagraphMd from '../../../../components/Ui/ParagraphMd';
import ParagraphSm from '../../../../components/Ui/ParagraphSm';

import formatTimeAgo from '../../../../utils/formatTimeAgo';
import { AllJobsProps } from './types';

import * as S from './style';

const AllJobs: React.FC<AllJobsProps> = ({
    searchTerm,
    currentJobs,
    selectedJob,
    handleClick,
}) => {
    return (
        <>
            <S.HeaderAllJobs>
                <S.AllJobsTitle>{searchTerm} </S.AllJobsTitle>
                <S.AllJobsQuantity>
                    <strong>{currentJobs.length} vagas</strong> encontradas
                </S.AllJobsQuantity>
            </S.HeaderAllJobs>

            {currentJobs.map((item) => (
                <S.BoxJob
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    isActive={selectedJob?.id === item.id}
                >
                    <figure>
                        <S.CompanyImage src={Cognito} alt="cognito" />
                    </figure>

                    <S.JobInfo>
                        <ParagraphMd transform="capitalize">
                            {item.title}
                        </ParagraphMd>

                        {item.company && (
                            <ParagraphSm>{item.company}</ParagraphSm>
                        )}

                        {item.location && (
                            <ParagraphSm opacity="0.9">
                                {item.location}
                            </ParagraphSm>
                        )}

                        <LabelSm opacity="0.9">
                            {formatTimeAgo(item.created_date)}
                        </LabelSm>
                    </S.JobInfo>
                </S.BoxJob>
            ))}
        </>
    );
};

export default AllJobs;
