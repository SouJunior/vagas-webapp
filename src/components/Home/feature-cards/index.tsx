import { FeatureCard } from './feature-card';
import { featureCardsData } from './feature-cards-data';

export const FeatureCards: React.FC = ({}) => {
    return (
        <>
            {featureCardsData.map((card, index) => (
                <FeatureCard key={index} {...card} />
            ))}
        </>
    );
};
