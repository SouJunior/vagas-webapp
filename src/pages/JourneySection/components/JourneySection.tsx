import { useState } from 'react';
import RenderLeftButtonsMenu from './RenderLeftButtonsMenu';
import { ContentContainer } from './styles';
import RenderRightContent from './RenderRightContent';
import FotografiaContent from './RightContent/FotografiaContent';

const JourneySection: React.FC = () => {
    const [contentKey, setContentKey] = useState<string>('initialKey');
    const [content, setContent] = useState<React.ReactNode>(
        <FotografiaContent />,
    );

    const changeContent = (newContent: React.ReactNode, newKey: string) => {
        setContent(newContent);
        setContentKey(newKey);
    };

    return (
        <ContentContainer>
            <RenderLeftButtonsMenu setContent={changeContent} />
            <RenderRightContent content={content} contentKey={contentKey} />
        </ContentContainer>
    );
};

export default JourneySection;
