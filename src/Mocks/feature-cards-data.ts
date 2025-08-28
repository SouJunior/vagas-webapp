import Search from '../assets/imgs/search_for_employees_online.svg';
import SocialMedia from '../assets/imgs/liking_photos_on_social_media.svg';
import Smartphone from '../assets/imgs/smartphone_with_online_support_chat.svg';
import { IFeatureCard } from '../components/Home/feature-cards/types';

export const featureCardsData: IFeatureCard[] = [
    {
        id: 'feature-1',
        title: 'Porque contratar pela SJ?',
        description:
            'Conheça mais sobre os benefícios de contratar pelo nosso site.',
        imgSrc: Search,
        imgAlt: 'Ícone representando contratação',
    },
    {
        id: 'feature-2',
        title: 'Blog da SouJunior',
        description: 'Conheça nossos artigos e cresça cada vez mais.',
        imgSrc: SocialMedia,
        imgAlt: 'Ícone representando artigos e blog',
    },
    {
        id: 'feature-3',
        title: 'Apoia-se',
        description:
            'Conheça nossa campanha de doação e nos ajude a financiar o projeto.',
        imgSrc: Smartphone,
        imgAlt: 'Ícone representando campanha de doação',
    },
];
