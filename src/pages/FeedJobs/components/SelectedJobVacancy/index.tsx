import LabelSm from '../../../../components/Ui/LabelSm';
import ParagraphMd from '../../../../components/Ui/ParagraphMd';
import ParagraphSm from '../../../../components/Ui/ParagraphSm';
import SubtitleSm from '../../../../components/Ui/SubtitleSm';

import { SelectedJobVacancyProps } from './types';

import * as S from './style';
import renderTextWithLinksAndBreaks from '../../../../utils/renderTextWithLinksAndBreaks';
import formatTimeAgo from '../../../../utils/formatTimeAgo';

const SelectedJobVacancy: React.FC<SelectedJobVacancyProps> = ({
    selectedJob,
}) => {
    return (
        <S.ContainerSelectedJob>
            <S.HeaderSelectedJob>
                <S.BoxHeaderSelectedJob>
                    <SubtitleSm transform="capitalize">
                        {selectedJob.title}
                    </SubtitleSm>

                    <S.InlineContent gap="4px">
                        {selectedJob.company && (
                            <ParagraphSm color="#323232" weight="500">
                                {selectedJob.company}
                            </ParagraphSm>
                        )}

                        {selectedJob.location && (
                            <ParagraphSm color="#323232" opacity="0.9">
                                {selectedJob.location}
                            </ParagraphSm>
                        )}
                    </S.InlineContent>

                    <LabelSm>{formatTimeAgo(selectedJob.created_date)}</LabelSm>
                </S.BoxHeaderSelectedJob>

                <a
                    href={selectedJob.link}
                    aria-label={`Clique e se candidate para a vaga.`}
                    rel="noreferrer"
                    target="_blank"
                >
                    <S.Button>Candidatar-se</S.Button>
                </a>
            </S.HeaderSelectedJob>

            <S.SelectedJobContent>
                {selectedJob.description && (
                    <ParagraphMd>Descrição da vaga</ParagraphMd>
                )}

                <S.BoxDescriptionText>
                    {renderTextWithLinksAndBreaks(selectedJob.description)}
                </S.BoxDescriptionText>
            </S.SelectedJobContent>
        </S.ContainerSelectedJob>
    );
};

export default SelectedJobVacancy;
