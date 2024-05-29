import Work from '../../../../assets/imgs/work.svg';

import Badge from '../../../../components/Ui/Badge/';
import LabelSm from '../../../../components/Ui/LabelSm';
import ParagraphMd from '../../../../components/Ui/ParagraphMd';
import ParagraphSm from '../../../../components/Ui/ParagraphSm';
import SubtitleSm from '../../../../components/Ui/SubtitleSm';

import { SelectedJobVacancyProps } from './types';

import * as S from './style';

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

                    <S.InlineContent gap="4px">
                        <LabelSm>{selectedJob.time}</LabelSm>
                        <LabelSm color="#323232">50 candidaturas</LabelSm>
                    </S.InlineContent>
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
                <S.InlineContent gap="8px" inline>
                    <S.IconWork src={Work} alt="work" />

                    <Badge>
                        <ParagraphSm color="#001633">
                            Tempo Integral
                        </ParagraphSm>
                    </Badge>

                    <Badge>
                        <ParagraphSm color="#001633">Remoto</ParagraphSm>
                    </Badge>

                    <Badge>
                        <ParagraphSm color="#001633">Junior</ParagraphSm>
                    </Badge>

                    <Badge>
                        <ParagraphSm color="#001633">CLT</ParagraphSm>
                    </Badge>
                </S.InlineContent>

                <ParagraphMd>Descrição da vaga</ParagraphMd>

                <div>
                    <ParagraphSm color="#515050" description>
                        {selectedJob.description}
                    </ParagraphSm>
                </div>
            </S.SelectedJobContent>
        </S.ContainerSelectedJob>
    );
};

export default SelectedJobVacancy;
