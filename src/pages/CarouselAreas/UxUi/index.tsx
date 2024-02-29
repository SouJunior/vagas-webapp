import UiRepresentation from '../../../assets/imgs/ui-representation.svg';
import UiDesign from '../../../assets/imgs/ui-design.svg';
import Designer from '../../../assets/imgs/designer.svg';

import { Layout } from 'phosphor-react';

import * as S from './style';
import Title from '../components/Title';
import ProfessionsSubtitle from '../components/ProfessionsSubtitle';
import ProfessionsParagraph from '../components/ProfessionsParagraph';
import ProfessionsCard from '../components/ProfessionsCard';

const UxUi = () => {
    return (
        <>
            <S.TitleContainer>
                <Title>UX/UI Design</Title>

                <div>
                    <ProfessionsParagraph dark>
                        O UX Design, ou Design de Experiência do Usuário, é uma
                        disciplina que se concentra em melhorar a satisfação e a
                        usabilidade de um produto, tornando a interação do
                        usuário mais intuitiva, eficiente e agradável.  Os
                        profissionais de UX Design se dedicam a entender as
                        necessidades e expectativas dos usuários para criar
                        designs que atendam a esses requisitos.
                    </ProfessionsParagraph>
                    <ProfessionsParagraph dark>
                        Principais atividades do UX Design:
                    </ProfessionsParagraph>
                </div>
            </S.TitleContainer>

            <ProfessionsCard color="#046AD0" icon>
                <Layout size={200} color="#fff" />
            </ProfessionsCard>

            <ProfessionsCard color="#323232">
                <ProfessionsSubtitle>Criação de Personas</ProfessionsSubtitle>
                <ProfessionsParagraph>
                    Desenvolver representações fictícias de diferentes tipos de
                    usuários para orientar o design com base em diferentes
                    perfis.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <ProfessionsCard color="#046ad0">
                <ProfessionsSubtitle>Pesquisa de Usuários</ProfessionsSubtitle>
                <ProfessionsParagraph>
                    Realizar pesquisas para compreender as necessidades,
                    expectativas e comportamentos dos usuários.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <ProfessionsCard color="#d6e7ff">
                <ProfessionsSubtitle dark>Jornadas</ProfessionsSubtitle>
                <ProfessionsParagraph dark>
                    Mapear o caminho que um usuário percorre ao interagir com um
                    produto, identificando pontos de dor e oportunidades de
                    melhoria.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <ProfessionsCard color="#323232">
                <ProfessionsSubtitle>Testes de Usabilidade</ProfessionsSubtitle>
                <ProfessionsParagraph>
                    Conduzir testes com usuários para avaliar a eficácia do
                    design e identificar áreas de melhoria.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <ProfessionsCard color="#046ad0">
                <ProfessionsSubtitle>
                    Wireframes e Protótipos
                </ProfessionsSubtitle>
                <ProfessionsParagraph>
                    Criar esboços de baixa fidelidade (wireframes) e protótipos
                    interativos para visualizar a estrutura e fluxo do produto.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <ProfessionsCard color="#d6e7ff">
                <ProfessionsSubtitle dark>
                    Iteração e Melhoria Contínua
                </ProfessionsSubtitle>
                <ProfessionsParagraph dark>
                    Com base nos feedbacks dos usuários, ajustar e aprimorar
                    constantemente o design para otimizar a experiência.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <S.ExplanationBox>
                <ProfessionsSubtitle>
                    UI Design (Design de Interface do Usuário)
                </ProfessionsSubtitle>

                <div>
                    <ProfessionsParagraph>
                        O UI Design, ou Design de Interface do Usuário, está
                        mais centrado na estética visual e na aparência do
                        produto. 
                    </ProfessionsParagraph>
                    <ProfessionsParagraph>
                        Os profissionais de UI Design se concentram em criar
                        interfaces visualmente atraentes e consistentes,
                        considerando elementos como cores, tipografia, ícones e
                        layouts. 
                    </ProfessionsParagraph>
                    <ProfessionsParagraph>
                        Eles trabalham em colaboração com os profissionais de UX
                        Design para garantir que a interface seja não apenas
                        funcional, mas também esteticamente agradável.
                    </ProfessionsParagraph>
                    <ProfessionsParagraph>
                        Principais atividades do UI Design:
                    </ProfessionsParagraph>
                </div>

                <S.FigureUiRepresentation>
                    <img src={UiRepresentation} alt="Ui Representation" />
                </S.FigureUiRepresentation>
            </S.ExplanationBox>

            <S.VisualElementsBox>
                <ProfessionsSubtitle>
                    Escolha de Elementos Visuais
                </ProfessionsSubtitle>

                <S.TextLightWithMargin>
                    Selecionar cores, tipografia, ícones e outros elementos
                    visuais para criar uma identidade visual coesa.
                </S.TextLightWithMargin>
            </S.VisualElementsBox>

            <S.GraphicElementsBox>
                <ProfessionsSubtitle>Elementos Gráficos</ProfessionsSubtitle>

                <S.TextLightWithMargin>
                    Capacidade de se adaptar a mudanças nos requisitos do
                    cliente ou no ambiente de negócios durante o processo de
                    desenvolvimento.
                </S.TextLightWithMargin>
            </S.GraphicElementsBox>

            <S.LayoutsBox>
                <ProfessionsSubtitle dark>
                    Design de Layouts e Grids
                </ProfessionsSubtitle>

                <S.TextDarkWithMargin>
                    Criar layouts e grids para organizar visualmente os
                    elementos na interface.
                </S.TextDarkWithMargin>
            </S.LayoutsBox>

            <ProfessionsCard color="#323232">
                <ProfessionsSubtitle>
                    Colaboração com Desenvolvedores
                </ProfessionsSubtitle>
                <ProfessionsParagraph>
                    Trabalhar em estreita colaboração com desenvolvedores para
                    garantir a implementação correta do design.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <ProfessionsCard color="#046ad0">
                <ProfessionsSubtitle>Consistência Visual</ProfessionsSubtitle>
                <ProfessionsParagraph>
                    Manter a consistência visual em todo o produto para uma
                    experiência coesa.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <ProfessionsCard color="#d6e7ff">
                <ProfessionsSubtitle dark>Responsividade</ProfessionsSubtitle>
                <ProfessionsParagraph dark>
                    Garantir que o design seja responsivo, adaptando-se a
                    diferentes tamanhos de tela e dispositivos.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <S.VisualElementsBox>
                <ProfessionsParagraph>
                    Ambos os profissionais desempenham papéis complementares
                    para criar produtos digitais bem-sucedidos, onde o UX Design
                    se concentra na experiência global do usuário e o UI Design
                    trata da estética visual da interface. A colaboração entre
                    essas disciplinas é fundamental para oferecer uma
                    experiência completa e eficaz aos usuários.
                </ProfessionsParagraph>
            </S.VisualElementsBox>

            <S.BoxBlueLightImage>
                <img src={Designer} alt="Designer UX/UI" />
            </S.BoxBlueLightImage>
        </>
    );
};

export default UxUi;
