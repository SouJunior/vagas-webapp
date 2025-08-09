import Search from '../../../assets/imgs/search_for_employees_online.svg';
import SocialMedia from '../../../assets/imgs/liking_photos_on_social_media.svg';
import Smartphone from '../../../assets/imgs/smartphone_with_online_support_chat.svg';
export interface FeatureCard {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

export const featureCardsData: FeatureCard[] = [
    {
        title: 'Porque contratar pela SJ?',
        description:
            'Conheça mais sobre os benefícios de contratar pelo nosso site.',
        imgSrc: Search,
        imgAlt: 'Ícone representando contratação',
    },
    {
        title: 'Blog da SouJunior',
        description: 'Conheça nossos artigos e cresça cada vez mais.',
        imgSrc: SocialMedia,
        imgAlt: 'Ícone representando artigos e blog',
    },
    {
        title: 'Apoia-se',
        description:
            'Conheça nossa campanha de doação e nos ajude a financiar o projeto.',
        imgSrc: Smartphone,
        imgAlt: 'Ícone representando campanha de doação',
    },
];
