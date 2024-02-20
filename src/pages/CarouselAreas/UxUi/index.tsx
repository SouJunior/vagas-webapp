import UiRepresentation from '../../../assets/imgs/ui-representation.svg';
import UiDesign from '../../../assets/imgs/ui-design.svg';
import Designer from '../../../assets/imgs/designer.svg';

import { Layout } from 'phosphor-react';

import * as S from './style';
import MainContainer from '../components/MainContainer';
import ContainerItens from '../components/ContainerItens';

const UxUi = () => {
    return (
        <MainContainer>
            <ContainerItens>
                <S.TitleContainer>
                    <S.Title src={UiDesign} alt="Ui Design" />

                    <div>
                        <S.TextDark>
                            O UX Design, ou Design de Experiência do Usuário, é
                            uma disciplina que se concentra em melhorar a
                            satisfação e a usabilidade de um produto, tornando a
                            interação do usuário mais intuitiva, eficiente e
                            agradável.  Os profissionais de UX Design se dedicam
                            a entender as necessidades e expectativas dos
                            usuários para criar designs que atendam a esses
                            requisitos.
                        </S.TextDark>
                        <S.TextDark>
                            Principais atividades do UX Design:
                        </S.TextDark>
                    </div>
                </S.TitleContainer>

                <S.IconContainer>
                    <Layout />
                </S.IconContainer>

                <S.BoxDark>
                    <S.SubtitleLight>Criação de Personas</S.SubtitleLight>
                    <S.TextLight>
                        Desenvolver representações fictícias de diferentes tipos
                        de usuários para orientar o design com base em
                        diferentes perfis.
                    </S.TextLight>
                </S.BoxDark>

                <S.BoxBlue>
                    <S.SubtitleLight>Pesquisa de Usuários</S.SubtitleLight>
                    <S.TextLight>
                        Realizar pesquisas para compreender as necessidades,
                        expectativas e comportamentos dos usuários.
                    </S.TextLight>
                </S.BoxBlue>

                <S.BoxBlueLight>
                    <S.SubtitleDark>Jornadas</S.SubtitleDark>
                    <S.TextDark>
                        Mapear o caminho que um usuário percorre ao interagir
                        com um produto, identificando pontos de dor e
                        oportunidades de melhoria.
                    </S.TextDark>
                </S.BoxBlueLight>

                <S.BoxDark>
                    <S.SubtitleLight>Testes de Usabilidade</S.SubtitleLight>
                    <S.TextLight>
                        Conduzir testes com usuários para avaliar a eficácia do
                        design e identificar áreas de melhoria.
                    </S.TextLight>
                </S.BoxDark>

                <S.BoxBlue>
                    <S.SubtitleLight>Wireframes e Protótipos</S.SubtitleLight>
                    <S.TextLight>
                        Criar esboços de baixa fidelidade (wireframes) e
                        protótipos interativos para visualizar a estrutura e
                        fluxo do produto.
                    </S.TextLight>
                </S.BoxBlue>

                <S.BoxBlueLight>
                    <S.SubtitleDark>
                        Iteração e Melhoria Contínua
                    </S.SubtitleDark>
                    <S.TextDark>
                        Com base nos feedbacks dos usuários, ajustar e aprimorar
                        constantemente o design para otimizar a experiência.
                    </S.TextDark>
                </S.BoxBlueLight>

                <S.ExplanationBox>
                    <S.SubtitleLight>
                        UI Design (Design de Interface do Usuário)
                    </S.SubtitleLight>

                    <div>
                        <S.TextLight>
                            O UI Design, ou Design de Interface do Usuário, está
                            mais centrado na estética visual e na aparência do
                            produto. 
                        </S.TextLight>
                        <S.TextLight>
                            Os profissionais de UI Design se concentram em criar
                            interfaces visualmente atraentes e consistentes,
                            considerando elementos como cores, tipografia,
                            ícones e layouts. 
                        </S.TextLight>
                        <S.TextLight>
                            Eles trabalham em colaboração com os profissionais
                            de UX Design para garantir que a interface seja não
                            apenas funcional, mas também esteticamente
                            agradável.
                        </S.TextLight>
                        <S.TextLight>
                            Principais atividades do UI Design:
                        </S.TextLight>
                    </div>

                    <S.FigureUiRepresentation>
                        <img src={UiRepresentation} alt="Ui Representation" />
                    </S.FigureUiRepresentation>
                </S.ExplanationBox>

                <S.VisualElementsBox>
                    <S.SubtitleLight>
                        Escolha de Elementos Visuais
                    </S.SubtitleLight>

                    <S.TextLight>
                        Selecionar cores, tipografia, ícones e outros elementos
                        visuais para criar uma identidade visual coesa.
                    </S.TextLight>
                </S.VisualElementsBox>

                <S.GraphicElementsBox>
                    <S.SubtitleLight>Elementos Gráficos</S.SubtitleLight>

                    <S.TextLight>
                        Capacidade de se adaptar a mudanças nos requisitos do
                        cliente ou no ambiente de negócios durante o processo de
                        desenvolvimento.
                    </S.TextLight>
                </S.GraphicElementsBox>

                <S.LayoutsBox>
                    <S.SubtitleDark>Design de Layouts e Grids</S.SubtitleDark>

                    <S.TextDark>
                        Criar layouts e grids para organizar visualmente os
                        elementos na interface.
                    </S.TextDark>
                </S.LayoutsBox>

                <S.BoxDark>
                    <S.SubtitleLight>
                        Colaboração com Desenvolvedores
                    </S.SubtitleLight>
                    <S.TextLight>
                        Trabalhar em estreita colaboração com desenvolvedores
                        para garantir a implementação correta do design.
                    </S.TextLight>
                </S.BoxDark>

                <S.BoxBlue>
                    <S.SubtitleLight>Consistência Visual</S.SubtitleLight>
                    <S.TextLight>
                        Manter a consistência visual em todo o produto para uma
                        experiência coesa.
                    </S.TextLight>
                </S.BoxBlue>

                <S.BoxBlueLight>
                    <S.SubtitleDark>Responsividade</S.SubtitleDark>
                    <S.TextDark>
                        Garantir que o design seja responsivo, adaptando-se a
                        diferentes tamanhos de tela e dispositivos.
                    </S.TextDark>
                </S.BoxBlueLight>

                <S.VisualElementsBox>
                    <S.TextLight>
                        Ambos os profissionais desempenham papéis complementares
                        para criar produtos digitais bem-sucedidos, onde o UX
                        Design se concentra na experiência global do usuário e o
                        UI Design trata da estética visual da interface. A
                        colaboração entre essas disciplinas é fundamental para
                        oferecer uma experiência completa e eficaz aos usuários.
                    </S.TextLight>
                </S.VisualElementsBox>

                <S.BoxBlueLightImage>
                    <img src={Designer} alt="Designer UX/UI" />
                </S.BoxBlueLightImage>
            </ContainerItens>
        </MainContainer>
    );
};

export default UxUi;
