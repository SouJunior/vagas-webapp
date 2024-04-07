import { ReactElement, useState } from 'react';
import {
    FigureBox,
    ItemDescription,
    ItemSubtitle,
    ItemTitle,
    MenuItem,
    LeftMenu,
} from './styles';
import { Article, Camera, Key, Scroll, UserSquare } from 'phosphor-react';
import FotografiaContent from './RightContent/FotografiaContent';
import TituloLinkedinContent from './RightContent/TituloLinkedinContent';
import ResumoLinkedinContent from './RightContent/ResumoLinkedinContent';
import ExperienciaContent from './RightContent/ExperienciaContent';
import PalavrasChavesContent from './RightContent/PalavrasChavesContent';
import ThumbnailFigure from './RightContent/ThumbnailFigure';

import CameraIcon from '../../../assets/imgs/photo_camera.svg'

interface LeftMenuItemsInterface {
    id: number;
    figure: React.ReactNode;
    title: string;
    intro: string;
    content: React.ReactNode;
}

interface ButtonSetContentInterface {
    setContent: (component: React.ReactNode, newKey: string) => void;
}

export const Items = [
    {
        id: 1,
        figure: <Camera size={25} color='#344054'/>,
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

const RenderLeftButtonsMenu: React.FC<ButtonSetContentInterface> = ({ setContent }) => {
    const [activeItemId, setActiveItemId] = useState(0);

    return (
        <>
            <LeftMenu>
                {Items.map((item: LeftMenuItemsInterface) => (
                    <MenuItem 
                        isActive={item.id === activeItemId}
                        key={item.id}
                        onClick={() => {setActiveItemId(item.id); setContent(item.content, `content-${item.id}`)}}
                    >
                        <FigureBox>{item.figure}</FigureBox>
                        <ItemDescription>
                            <ItemTitle>{item.title}</ItemTitle>
                            <ItemSubtitle>{item.intro}</ItemSubtitle>
                        </ItemDescription>
                    </MenuItem>
                ))}
            </LeftMenu>
        </>
    );
};

export default RenderLeftButtonsMenu;
