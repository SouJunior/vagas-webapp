import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef } from 'react';

import RenderLeftButtonsMenu from './components/RenderLeftButton';
import RightContent from './components/RightContent';

import { curriculoItems } from './ItemsList/CurriculoItems';
import { linkedinItems } from './ItemsList/LinkedinItems';
import { ContentProps } from './types';

import * as S from './style';

const JourneySection = () => {
    const [content, setContent] = useState<ContentProps[]>(linkedinItems);
    const [expandedItemId, setExpandedItemId] = useState(1);
    const contentRef = useRef<HTMLDivElement>(null);

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

    if (!content) {
        return null;
    }

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

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <S.ContentContainer key={expandedItemId}>
                        <RenderLeftButtonsMenu
                            content={content}
                            expandedItemId={expandedItemId}
                            onItemClick={handleItemClick}
                        />

                        {selectedContent && (
                            <RightContent content={selectedContent} />
                        )}
                    </S.ContentContainer>
                </motion.div>
            </AnimatePresence>
        </S.ContainerJourney>
    );
};

export default JourneySection;
