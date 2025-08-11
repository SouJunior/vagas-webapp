import lazyImageSrc from '../../../../assets/imgs/erlenmeyer-flask-and-test-tube-for-scientific-experiments.svg';
import { InfoCard } from '../../../shared/card/info-card';
import { MeetSouJunior } from './meet-soujunior';

export const CareerTransitionContent: React.FC = () => {
    return (
        <section
            className="flex flex-col items-center justify-center pt-6 pb-8 gap-8 bg-blue-50"
            aria-labelledby="career-transition-content"
        >
            <MeetSouJunior />
            <InfoCard
                lazyImageSrc={lazyImageSrc}
                lazyImageAlt="Equipamentos de laboratório científico"
                lazyImageAriaLabel="Equipamentos de laboratório científico  "
                title="SouJunior Labs"
                description="Coloque em prática seu conhecimento, participando de projetos reais."
            />
        </section>
    );
};
