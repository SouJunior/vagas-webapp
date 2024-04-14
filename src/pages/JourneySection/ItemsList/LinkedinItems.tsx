import { Article, Camera, Key, Scroll, UserSquare } from "phosphor-react";
import FotografiaContent from "../components/RightContent/FotografiaContent";
import TituloLinkedinContent from "../components/RightContent/TituloLinkedinContent";
import ResumoLinkedinContent from "../components/RightContent/ResumoLinkedinContent";
import ExperienciaContent from "../components/RightContent/ExperienciaContent";
import PalavrasChavesContent from "../components/RightContent/PalavrasChavesContent";

const linkedinItems = [
    {
        id: 1,
        figure: <Camera size={25} color="#344054" />,
        title: 'A Fotografia',
        intro: 'Importância da imagem no LinkedIn: descubra como uma foto profissional pode impactar suas oportunidades de carreira.',
        content: <FotografiaContent />,
    },
    {
        id: 2,
        figure: <Article size={25} color="#344054" />,
        title: 'O Título do Linkedin',
        intro: 'O resumo é crucial: destaca habilidades e experiências, capturando a atenção de recrutadores e conexões.',
        content: <TituloLinkedinContent />,
    },
    {
        id: 3,
        figure: <UserSquare size={25} color="#344054" />,
        title: 'O Resumo do Linkedin (sobre)',
        intro: 'Não pule esta seção. Se precisar de ajuda, contrate um redator, mas inclua um resumo. ',
        content: <ResumoLinkedinContent />,
    },
    {
        id: 4,
        figure: <Scroll size={25} color="#344054" />,
        title: 'Sua experiência de trabalho e educação',
        intro: 'Aprimore seu perfil no LinkedIn! Exponha sua jornada e habilidades essenciais com palavras-chave direcionadas.',
        content: <ExperienciaContent />,
    },
    {
        id: 5,
        figure: <Key size={25} color="#344054" />,
        title: 'Adicionar as palavras-chave corretas.',
        intro: 'Destaque suas habilidades ao buscar empregos. Identifique palavras-chave nos requisitos e seja autêntico.',
        content: <PalavrasChavesContent />,
    },
];

export { linkedinItems }