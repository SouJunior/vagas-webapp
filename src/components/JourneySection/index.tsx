import { useState, useRef } from 'react';

import RenderLeftButtonsMenu from './components/RenderLeftButton';
import RightContent from './components/RightContent';

import { curriculoItems } from '../../Mocks/CurriculoItems';
import { linkedinItems } from '../../Mocks/LinkedinItems';

import { ContentProps } from './types';

import * as S from './style';
import JourneyResponsive from './components/JourneyResponsive';

const JourneySection = () => {
    const [content, setContent] = useState<ContentProps[]>(linkedinItems);
    const [expandedItemId, setExpandedItemId] = useState<number>(1);
    const contentRef = useRef<HTMLDivElement>(null);

    if (!content) {
        return null;
    }

    const handleItemClick = (id: number) => {
        setExpandedItemId(id);
        window.scrollTo({
            top: (contentRef.current?.offsetTop ?? 0) - 80,
            behavior: 'smooth',
        });
    };

    const handleChangeContent = (item: ContentProps[]) => {
        setContent(item);
        setExpandedItemId(1);
    };

    const selectedContent = content.find(({ id }) => id === expandedItemId);

    return (
        <S.ContainerJourney ref={contentRef}>
            <S.TitleContainer>
                <S.SecondaryTitle>Vamos juntos nessa jornada</S.SecondaryTitle>
            </S.TitleContainer>

            <S.ToggleButtonSection>
                <S.LinkedinButton
                    isActive={content === linkedinItems}
                    onClick={() => handleChangeContent(linkedinItems)}
                >
                    LinkedIn
                </S.LinkedinButton>

                <S.CurriculoButton
                    isActive={content === curriculoItems}
                    onClick={() => handleChangeContent(curriculoItems)}
                >
                    Currículo
                </S.CurriculoButton>
            </S.ToggleButtonSection>
            <JourneyResponsive data={content} />
            {selectedContent && (
                <S.ContentContainer>
                    <RenderLeftButtonsMenu
                        content={content}
                        expandedItemId={expandedItemId}
                        onItemClick={handleItemClick}
                    />

                    <RightContent content={selectedContent} />
                </S.ContentContainer>
            )}
        </S.ContainerJourney>
    );
};

export default JourneySection;
