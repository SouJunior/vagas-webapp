import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import LabelSm from '../Ui/LabelSm';
import ParagraphMd from '../Ui/ParagraphMd';
import ParagraphSm from '../Ui/ParagraphSm';
import SubtitleSm from '../Ui/SubtitleSm';

import renderTextWithLinksAndBreaks from '../../utils/renderTextWithLinksAndBreaks';
import formatTimeAgo from '../../utils/formatTimeAgo';
import { SelectedJobVacancyProps } from './types';

import * as S from './style';

const SelectedJobVacancy: React.FC<SelectedJobVacancyProps> = ({
    selectedJob,
}) => {
    const { pathname } = useLocation();
    const [location, setLocation] = useState<boolean>(false);
    const [scrollHeight, setScrollHeight] = useState<number>(0);

    const match = matchPath('/job/selected/:id', pathname);

    useEffect(() => {
        if (match) {
            setLocation(true);
        } else {
            setLocation(false);
        }
    }, [pathname, match]);

    const handleScroll = () => {
        setScrollHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <S.ContainerSelectedJob location={location}>
            <S.HeaderSelectedJob location={location}>
                <S.BoxHeaderSelectedJob>
                    <SubtitleSm transform="capitalize">
                        {selectedJob.title}
                    </SubtitleSm>

                    <S.InlineContent
                        gap="4px"
                        className={scrollHeight > 50 ? 'hidden' : ''}
                    >
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
                    className="apply-link"
                >
                    <S.Button className="first-button">Candidatar-se</S.Button>
                </a>
            </S.HeaderSelectedJob>

            <S.SelectedJobContent location={location}>
                {selectedJob.description && (
                    <ParagraphMd>Descrição da vaga</ParagraphMd>
                )}

                <S.BoxDescriptionText>
                    {renderTextWithLinksAndBreaks(selectedJob.description)}
                </S.BoxDescriptionText>

                <a
                    href={selectedJob.link}
                    aria-label={`Clique e se candidate para a vaga.`}
                    rel="noreferrer"
                    target="_blank"
                    className="apply-link"
                >
                    <S.Button className="last-button">Candidatar-se</S.Button>
                </a>
            </S.SelectedJobContent>
        </S.ContainerSelectedJob>
    );
};

export default SelectedJobVacancy;
