import { useState } from 'react';
import RenderLeftButtonsMenu from './RenderLeftButtonsMenu';
import { ContentContainer } from './styles';
import RenderRightContent from './RenderRightContent';


const JourneySection: React.FC = () => {
    const [content, setContent] = useState<React.ReactNode>(null)

    return (
        <ContentContainer>
            <RenderLeftButtonsMenu setContent={setContent}/>
            <RenderRightContent content={content}/>
        </ContentContainer>
    );
};

export default JourneySection;
