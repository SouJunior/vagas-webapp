
import { useRef, useState } from 'react';
import RenderLeftButtonsMenu from './RenderLeftButtonsMenu';
import { ContentContainer, CurriculoButton, LinkedinButton, ToggleButtonSection } from './styles';
import RenderRightContent from './RenderRightContent';
import FotografiaContent from './RightContent/Linkedin/FotografiaContent';
import ObjetivoProfissional from "../components/RightContent/Curriculo/ObjetivoProfissional"
import { motion, AnimatePresence } from 'framer-motion';



const containerVariants = {
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
};


const ToggleLinkedinCurriculoButton = () => {
    const [activeButton, setActiveButton] = useState('linkedinButton');


    const [contentKey, setContentKey] = useState<string>('initialKey');
    const [content, setContent] = useState<React.ReactNode>(
        <FotografiaContent/>
    );
    const contentRef = useRef<HTMLDivElement>(null);

    const changeContent = (newContent: React.ReactNode, newKey: string) => {
        setContent(newContent);
        setContentKey(newKey);
        setTimeout(() => { //scroll into the new content render
            window.scrollTo({
                top: (contentRef.current?.offsetTop ?? 0) - 80,
                behavior: 'smooth',
            })
        }, 100);
    };

    return (
        <div ref={contentRef}>
            <ToggleButtonSection >
                <LinkedinButton
                    isActive={activeButton === 'linkedinButton'}
                    onClick={() => {setActiveButton('linkedinButton'); setContent(<FotografiaContent/>)}}
                >
                    Lindedin
                </LinkedinButton>

                <CurriculoButton
                    isActive={activeButton === 'curriculoButton'}
                    onClick={() => { setActiveButton('curriculoButton'); setContent(<ObjetivoProfissional/>)}}
                >
                    Currículo
                </CurriculoButton>
            </ToggleButtonSection>

            <div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeButton}
                        variants={containerVariants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        <ContentContainer>
                            <RenderLeftButtonsMenu
                                setContent={changeContent}
                                whichContent={activeButton}
                            />
                            <RenderRightContent
                                content={content}
                                contentKey={contentKey}
                            />
                        </ContentContainer>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

    );
};

export default ToggleLinkedinCurriculoButton;
