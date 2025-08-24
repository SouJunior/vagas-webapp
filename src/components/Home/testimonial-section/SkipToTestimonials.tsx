import React from 'react';
import { ACCESSIBILITY_CLASSES } from '../../../utils/accessibility';

const SkipToTestimonials: React.FC = () => (
    <a
        href="#testimonials-title"
        className={`${ACCESSIBILITY_CLASSES.srOnly} ${ACCESSIBILITY_CLASSES.focusVisible} ${ACCESSIBILITY_CLASSES.skipLink}`}
        tabIndex={0}
    >
        Pular para depoimentos
    </a>
);

export default SkipToTestimonials;
