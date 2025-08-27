import { featureCardsData } from '../../../Mocks/feature-cards-data';
import { InfoCard } from '../../shared/card/info-card';

export const FeatureCards: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col items-center gap-6 py-4 md:flex-row md:flex-wrap md:justify-center md:gap-x-4 md:gap-y-6 lg:flex-nowrap lg:gap-6">
      {featureCardsData.map((card, index) => (
        <InfoCard
          key={index}
          lazyImageSrc={card.imgSrc}
          lazyImageAlt={card.imgAlt}
          lazyImageAriaLabel={card.imgAlt}
          ariaLabelledBy={`${card.id}-title`}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};
