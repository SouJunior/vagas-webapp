import { useState, useEffect } from 'react';
import renderTextWithLinksAndBreaks from '../../../../utils/renderTextWithLinksAndBreaks';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Props } from './types';
import * as S from './style';

const JourneyResponsive: React.FC<Props> = ({ data }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 780);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isMobile) {
        return null;
    }

    return (
        <S.Layout>
            {data.map((item) => (
                <Accordion className="dropdown" key={item.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{item.figure}</Typography>
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.content.map((paragraph, index) => (
                            <div key={index}>
                                {renderTextWithLinksAndBreaks(paragraph.text)}
                            </div>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </S.Layout>
    );
};

export default JourneyResponsive;