export interface Logo {
  id: string;
  src: string;
  alt: string;
}

export interface CarouselPartnerCompaniesProps {
  logos?: Logo[];
  autoplayDelay?: number;
  intervaloEntreSlides?: number;
}

export interface ListOfPartnersProps {
  logos: Logo[];
}
