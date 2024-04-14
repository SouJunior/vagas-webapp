import { Crosshair, Desktop, Globe, Rocket, Star, SuitcaseSimple, XCircle } from "phosphor-react";
import FotografiaContent from "../components/RightContent/FotografiaContent";

const curriculoItems = [
    {
        id: 1,
        figure: <Crosshair size={25} color="#344054" />,
        title: 'Defina um objetivo profissional',
        intro: 'Saiba como redigir um objetivo claro e direcionado à vaga desejada.',
        content: <FotografiaContent />,
    },
    {
        id: 2,
        figure: <Desktop size={25} color="#344054" />,
        title: 'Destaque a sua formação ',
        intro: 'Preparar um currículo é mais do que apenas listar sua formação acadêmica. É uma oportunidade de se destacar.',
        content: <FotografiaContent />,
    },
    {
        id: 3,
        figure: <Globe size={25} color="#344054"/>,
        title: 'Mencione seus trabalhos voluntários',
        intro: 'Em uma pesquisa da Passport-Photo Online, mais de 80% dos recrutadores disseram que uma foto do LinkedIn era um fator ',
        content: <FotografiaContent />,
    },
    {
        id: 4,
        figure: <Star size={25} color="#344054"/>,
        title: 'Destaque suas qualificações profissionais',
        intro: 'Enfatize suas habilidades e competências para maximizar suas chances na vaga pretendida.',
        content: <FotografiaContent />,
    },
    {
        id: 5,
        figure: <Rocket size={25} color="#344054"/>,
        title: 'Informe sobre certificações',
        intro: 'Enriquecer seu currículo destacando certificados e informações complementares importantes.',
        content: <FotografiaContent />,
    },
    {
        id: 6,
        figure: <SuitcaseSimple size={25} color="#344054"/>,
        title: 'Não esqueça das informações complementares',
        intro: 'Destaque seus certificados e informações adicionais para turbinar seu currículo. Veja como:',
        content: <FotografiaContent />,
    },
    {
        id: 7,
        figure: <XCircle size={25} color="#344054"/>,
        title: 'O que evitar',
        intro: 'Por fim, é necessário tomar alguns cuidados para não deixar o seu currículo muito extenso ou difícil de ler. Confira abaixo o que deve ser evitado:',
        content: <FotografiaContent />, 
    }
];

export { curriculoItems }