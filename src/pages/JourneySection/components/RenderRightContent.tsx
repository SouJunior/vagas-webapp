import { RightText } from './styles';
import { motion, AnimatePresence } from 'framer-motion';

interface RightContentInterface {
    content: React.ReactNode;
    contentKey: string;
    whichContent: string;
}

const containerVariants = {
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
};

const RenderRightContent: React.FC<RightContentInterface> = ({
    content,
    contentKey,
    whichContent,
}) => {
    return (
        <RightText>
            <AnimatePresence mode="wait">
                <motion.div
                    key={contentKey}
                    variants={containerVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    {content}
                </motion.div>
            </AnimatePresence>
        </RightText>
    );
};

export default RenderRightContent;
