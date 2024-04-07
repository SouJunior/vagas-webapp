import { RightText } from './styles';
import { config, animated, useTransition } from 'react-spring';

interface RightContentInterface {
    content: React.ReactNode;
    keyProp: string;
}

const RenderRightContent: React.FC<RightContentInterface> = ({ content, keyProp }) => {
    const transitions = useTransition(content, {
        key: keyProp,
        from: { opacity: 0, transform: 'translate3d(0,50%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0%,0)' },
        config: config.gentle,
    });

    return (
        <RightText>
            {transitions((style, item) => 
            item? <animated.div style={style}>{item}</animated.div> : null)}
        </RightText>
    );
};

export default RenderRightContent;
