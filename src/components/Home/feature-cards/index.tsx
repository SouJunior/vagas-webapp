import { FeatureCard } from './feature-card';
import { featureCardsData } from '../../../Mocks/feature-cards-data';

export const FeatureCards: React.FC = () => {
    return (
        <section
            className="container mx-auto flex flex-col py-4 gap-6 items-center
                            md:flex-row md:flex-wrap md:justify-center md:gap-x-4 md:gap-y-6 
                            lg:gap-6 lg:flex-nowrap"
        >
            {featureCardsData.map((card, index) => (
                <FeatureCard key={index} {...card} />
            ))}
        </section>
    );
};
