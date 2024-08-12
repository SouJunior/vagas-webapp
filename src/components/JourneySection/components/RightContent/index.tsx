import { motion } from 'framer-motion';
import renderTextWithLinksAndBreaks from '../../../../utils/renderTextWithLinksAndBreaks';

import * as S from './styles';
import { RightContentProps } from './types';

const containerVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const RightContent: React.FC<RightContentProps> = ({ content }) => {
    if (!content) return null;

    const { id, contentIcon, content: paragraphs } = content;

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            id={`content.${id}`}
        >
            <S.Container>
                <S.ImgWrap>{contentIcon}</S.ImgWrap>
                {paragraphs.map((paragraph, index) => (
                    <div key={index}>
                            {paragraph.text ? renderTextWithLinksAndBreaks(paragraph.text)
                            :paragraph.sub ? <i>{renderTextWithLinksAndBreaks(paragraph.sub)}</i>
                            : null
                        }
                    </div>
                ))}
            </S.Container>
        </motion.div>
    );
};

export default RightContent;
