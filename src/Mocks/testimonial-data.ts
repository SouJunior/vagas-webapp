import BrunaCardosoImage from '../assets/imgs/BrunaCardoso.svg';
import LeidejaneImage from '../assets/imgs/Leidejane.svg';

export interface ITestimonial {
    id: number;
    testimony: string;
    author: string;
    position: string;
    image: string;
}

export const testimonials: ITestimonial[] = [
    {
        id: 1,
        testimony:
            'Participar da SouJunior tem sido uma experiência transformadora para minha trajetória profissional. Aqui, aprendo na prática como funciona o Scrum, entendendo a importância de cada cerimônia e como a metodologia contribui para a organização do time e evolução contínua dos projetos. Além disso, desenvolver tarefas em equipe me ensina a ouvir, colaborar e respeitar diferentes pontos de vista, o que tem sido essencial para meu crescimento como desenvolvedora. A SouJunior me mostra como a responsabilidade e trabalho em equipe andam juntos para alcançar resultados concretos.',
        author: 'Leidejane da Rosa',
        position: 'Desenvolvedora Fullstack',
        image: LeidejaneImage,
    },
    {
        id: 2,
        testimony:
            'Estar na Sou Junior foi um marco importante na minha caminhada profissional. Cada reunião, cada troca, cada desafio foi uma oportunidade de aprendizado, não só técnico, mas principalmente humano. A Sou Junior me ensinou que desenvolver produtos incríveis passa, antes de tudo, por desenvolver pessoas. Levo comigo não apenas novos conhecimentos, mas conexões que aquecem o coração e uma enorme gratidão por fazer parte dessa rede que acredita no potencial de quem está começando.',
        author: 'Bruna Cardoso',
        position: 'Scrum Master',
        image: BrunaCardosoImage,
    },
    {
        id: 3,
        testimony:
            'A SouJunior tem sido uma experiência incrível na minha transição de carreira. Aplico na prática os conhecimentos de design, participo de reuniões com o time de produtos e desenvolvimento, o que me permite conhecer o produto de forma holística, proporciona um ambiente colaborativo e de aprendizado constante. Além disso, a Sou junior promove workshops e palestras com conteúdos de muito valor para a vida profissional.',
        author: 'Larissa Rodrigues',
        position: 'UX/UI Designer',
        image: LeidejaneImage,
    },
    {
        id: 4,
        testimony:
            'Entrar na SouJunior foi definitivamente um marco no meu processo de mudança de carreira e de crescimento profissional, pois é absurda a diferença de quem eu era antes e sou agora. Aqui, entendemos o produto na prática, além da teoria, temos workshops, mentoria da vertical e pessoal, conversamos sobre Produto, participamos das cerimônias de Scrum, tudo isso com o plus de poder ver seu conhecimento virar algo concreto. Crescer e ajudar o outro a crescer. Esses processos são tremendamente desafiadores e também enchem o coração de orgulho de poder estar aqui.',
        author: 'Tatiana Batista',
        position: 'Associate Product Manager',
        image: BrunaCardosoImage,
    },
];
