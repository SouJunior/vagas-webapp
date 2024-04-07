import { useEffect, useState } from 'react';
import { AnimatedContent, RightText } from './styles';

interface RightContentInterface {
    content: React.ReactNode;
}

const RenderRightContent: React.FC<RightContentInterface> = ({ content }) => {
    const [key, setKey] = useState<number>(0);

    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, [content]);

    return (
        <RightText>
            <AnimatedContent key={key}>{content}</AnimatedContent>
        </RightText>
    );
};

export default RenderRightContent;
