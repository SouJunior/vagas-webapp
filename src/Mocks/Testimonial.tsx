import JoaoKremer from '../assets/imgs/testimonial-joão-kremer.svg';
import WandersonSantos from '../assets/imgs/testimonial-wanderson-santos.svg';
import TalitaBitencourt from '../assets/imgs/testimonial-talita-bitencourt.svg';
import RenatoSaturnino from '../assets/imgs/testimonial-renato-saturnino.svg';
import { TestimonialType } from '../@types/testimonial-type';

export const Testimonial: TestimonialType[] = [
    {
        Text: '“A minha passagem pela SouJunior me ajudou a entender um pouco mais sobre como funciona um projeto grande e a comunicação entre diferentes times. Me fez entender como trabalhar com produto e também com metodologia ágeis. E claro, os amigos que fiz me ajudam até hoje com dicas e ensinamentos importantes. Foi uma passagem curta e rápida, porém essencial para a minha carreira na área.”',
        Author: 'João Kremer',
        Workplace: 'Desenvolvedor Front-end na Dopster.io',
        Profile: `${JoaoKremer}`,
    },
    {
        Text: '“Antes de ingressar na SouJunior, eu colaborava em alguns projetos por conta própria e já tinha um interesse em fazer parte dessa iniciativa. Então, surgiu uma oportunidade como desenvolvedor backend, o que me permitiu vivenciar essa experiência. Ao assumir algumas tarefas, pude aprimorar meus conhecimentos e compreender melhor o objetivo do projeto. Consegui minha Oportunidade como desenvolvedor backend em uma empresa em 14/12/2022 e sou extremamente grato à SouJunior por me proporcionar um conhecimento adicional, uma experiência valiosa e a oportunidade de conhecer pessoas incríveis.”',
        Author: 'Wanderson Santos',
        Workplace: 'Desenvolvedor Back-end na Teddy Open Finance',
        Profile: `${WandersonSantos}`,
    },
    {
        Text: '“Minha jornada na Soujunior foi incrível! Ao dedicar um ano ao voluntariado, mergulhei na área de produto, adquirindo habilidades cruciais e me apaixonando ainda mais pela carreira. Essa vivência impulsionou minha transição de carreira e serei eternamente grata por fazer parte deste projeto.”',
        Author: 'Talita Bitencourt',
        Workplace: 'Product owner na Compass UOL',
        Profile: `${TalitaBitencourt}`,
    },
    {
        Text: '“Gratidão à Soujunior por iluminar meu caminho profissional. Após frustrações no mercado, aprendi com eles o papel vital do líder de produto, a dinâmica em equipes de desenvolvimento, métricas e agilidade. Conquistei valiosos aprendizados aqui. Sou extremamente grato pela oportunidade!”',
        Author: 'Renato Saturnino da Silva',
        Workplace: 'Product owner',
        Profile: `${RenatoSaturnino}`,
    },
];
