import {
    BoxText,
    BoxSubtitle,
    BoxTitle,
    ColorBox,
    ContainerFigure,
    ContainerItems,
    ContaianerMarker,
    FlexG24,
    FlexG42,
    Grid2A,
    Grid3A,
    GridAAB,
    GridABB,
    ItemText,
    SideBox,
    LateralGrid,
    MainContainer,
    MainText,
    Smallbox,
    StyledLi,
    StyledUl,
    Subtitle,
    Title,
    Img,
    BoxFeatured,
} from '../styles';
import MetAgeisFigure from '../../../assets/imgs/metodologias_ageis_figure.svg';
import BoardAgile from '../../../assets/imgs/board-agile.svg';
import WorkingGroup from '../../../assets/imgs/working-group-agile.svg';
import { Circle, CalendarCheck } from 'phosphor-react';

const Agile: React.FC = () => {
    return (
        <MainContainer>
            <ContainerItems>
                <GridAAB>
                    <BoxTitle>
                        <Title>Ágil</Title>
                        <MainText>
                            A área de "Ágil" refere-se a uma abordagem ou
                            metodologia de desenvolvimento de software que
                            enfatiza a flexibilidade, colaboração e entrega
                            incremental. O termo "Ágil" é frequentemente
                            associado ao Manifesto Ágil, um conjunto de
                            princípios e valores criado por um grupo de
                            desenvolvedores em 2001. O Ágil foi criado para
                            permitir que equipes de desenvolvimento respondam
                            rapidamente às mudanças nas necessidades do cliente
                            e no ambiente de negócios.
                        </MainText>
                    </BoxTitle>
                    <ContainerFigure>
                        <CalendarCheck />
                    </ContainerFigure>
                </GridAAB>

                <GridABB>
                    <SideBox>
                        <BoxFeatured>
                            <h2>Metodologias Ágeis</h2>
                        </BoxFeatured>
                        <BoxText>
                            Metodologias específicas dentro da abordagem Ágil
                            incluem Scrum, Kanban e XP (Extreme Programming). A
                            adoção da metodologia Ágil tem sido comum em
                            diversas áreas, não apenas no desenvolvimento de
                            software, pois seus princípios podem ser aplicados a
                            diferentes contextos para melhorar a eficiência e a
                            adaptabilidade em projetos. Características da
                            metodologia Ágil incluem:
                        </BoxText>
                        <img src={MetAgeisFigure} alt="Figura de um gráfico" />
                    </SideBox>
                    <LateralGrid>
                        <ColorBox>
                            <BoxSubtitle>Colaboração e Comunicação</BoxSubtitle>
                            <BoxText marginLeft="20px">
                                Prioridade na comunicação eficaz e colaboração
                                contínua entre equipe e partes interessadas.
                            </BoxText>
                        </ColorBox>
                        <ColorBox backgroundColor="#D6E7FF">
                            <BoxSubtitle color="#323232">
                                Entrega Incremental
                            </BoxSubtitle>
                            <BoxText marginLeft="20px" color="#323232">
                                Divisão do desenvolvimento em ciclos curtos
                                chamados "iterações" ou "sprints", com entregas
                                incrementais de funcionalidades utilizáveis.
                            </BoxText>
                        </ColorBox>
                        <ColorBox backgroundColor="#046AD0">
                            <BoxSubtitle>Adaptabilidade</BoxSubtitle>
                            <BoxText marginLeft="20px">
                                Capacidade de se adaptar a mudanças nos
                                requisitos do cliente ou no ambiente de negócios
                                durante o processo de desenvolvimento.
                            </BoxText>
                        </ColorBox>
                    </LateralGrid>
                </GridABB>
                <Grid3A>
                    <Smallbox>
                        <BoxSubtitle color="#323232">
                            Feedback Contínuo
                        </BoxSubtitle>
                        <BoxText color="#323232">
                            Estímulo à auto-organização das equipes, permitindo
                            que decidam como melhor atingir os objetivos.
                        </BoxText>
                    </Smallbox>
                    <Smallbox>
                        <BoxSubtitle color="#323232">
                            Auto-Organização de Equipes
                        </BoxSubtitle>
                        <BoxText color="#323232">
                            Incentivo à obtenção de feedback regular dos
                            clientes e outros stakeholders para melhorar
                            continuamente o produto.
                        </BoxText>
                    </Smallbox>
                    <Smallbox>
                        <BoxSubtitle color="#323232">Foco no Cliente</BoxSubtitle>
                        <BoxText color="#323232">
                            Cliente no centro do desenvolvimento, priorizando as
                            necessidades e expectativas do cliente.
                        </BoxText>
                    </Smallbox>
                </Grid3A>

                <GridAAB>
                    <ColorBox>
                        <StyledUl>
                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>Inspeção e Adaptação</Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Realização de reuniões regulares para
                                    inspecionar e adaptar o processo de
                                    desenvolvimento com base no feedback e nos
                                    resultados obtidos. O profissional de Ágil,
                                    muitas vezes referido como Scrum Master ou
                                    Agile Coach, desempenha um papel crucial na
                                    implementação e adoção de práticas ágeis em
                                    equipes de desenvolvimento. Suas
                                    responsabilidades variam, mas geralmente
                                    incluem:
                                </ItemText>
                            </FlexG24>

                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>
                                        Facilitação do Processo Ágil
                                    </Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Orientar e facilitar as práticas ágeis na
                                    equipe, ajudando a garantir que os
                                    princípios e valores ágeis sejam
                                    compreendidos e aplicados corretamente.
                                </ItemText>
                            </FlexG24>

                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>
                                        Treinamento e Capacitação
                                    </Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Treinar a equipe e outros membros da
                                    organização em práticas ágeis, promovendo o
                                    entendimento dos conceitos e metodologias.
                                </ItemText>
                            </FlexG24>
                        </StyledUl>
                    </ColorBox>

                    <SideBox gridArea="b">
                        <FlexG42>
                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>
                                        Ritmo Sustentável de Trabalho
                                    </Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Promover a transparência nas atividades da
                                    equipe, incluindo progresso, desafios e
                                    decisões tomadas.
                                </ItemText>
                            </FlexG24>

                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>Transparência</Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Valorização de um ritmo de trabalho
                                    sustentável, evitando sobrecarga excessiva
                                    da equipe.
                                </ItemText>
                            </FlexG24>
                        </FlexG42>

                        <Img src={BoardAgile}>
                        </Img>
                    </SideBox>
                </GridAAB>

                <Grid2A>
                    <ColorBox backgroundColor="#1165BA">
                        <BoxSubtitle>
                            Implementação de Frameworks Ágeis
                        </BoxSubtitle>
                        <BoxText>
                            Implementar frameworks ágeis, como Scrum ou Kanban,
                            e garantir que a equipe compreenda e siga os
                            processos definidos.
                        </BoxText>
                    </ColorBox>

                    <ColorBox backgroundColor="#1165BA" gridArea="b">
                        <BoxSubtitle>Remoção de Obstáculos</BoxSubtitle>
                        <BoxText>
                            Identificar e remover obstáculos que possam impedir
                            o progresso da equipe, seja relacionado a processos,
                            comunicação ou outros fatores.
                        </BoxText>
                    </ColorBox>
                </Grid2A>

                <Grid3A>
                    <Smallbox>
                        <BoxSubtitle color="#323232">
                            Cultura de Colaboração Eficiente
                        </BoxSubtitle>
                        <BoxText color="#323232">
                            Estímulo à auto-organização das equipes, permitindo
                            que decidam como melhor atingir os objetivos.
                        </BoxText>
                    </Smallbox>

                    <Smallbox>
                        <BoxSubtitle color="#323232">
                            Avaliação e Melhoria Contínua
                        </BoxSubtitle>
                        <BoxText color="#323232">
                            Avaliar o desempenho da equipe e facilitar a
                            melhoria contínua, utilizando feedback e métricas
                            para identificar oportunidades de aprimoramento.
                        </BoxText>
                    </Smallbox>

                    <Smallbox>
                        <BoxSubtitle color="#323232">
                            Facilitação de Reuniões Ágeis
                        </BoxSubtitle>
                        <BoxText color="#323232">
                            Organizar e facilitar reuniões ágeis, como reuniões
                            diárias, planejamento de sprint e retrospectivas,
                            garantindo que sejam produtivas.
                        </BoxText>
                    </Smallbox>
                </Grid3A>

                <GridABB>
                    <SideBox gridArea="a">
                        <FlexG42>
                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>Liderança Servidora</Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Adotar uma abordagem de liderança servidora,
                                    apoiando a equipe e removendo barreiras para
                                    permitir que ela alcance seus objetivos.
                                </ItemText>
                            </FlexG24>

                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>Mentoria</Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Oferecer mentoria aos membros da equipe para
                                    desenvolver suas habilidades e compreensão
                                    das práticas ágeis.
                                </ItemText>
                            </FlexG24>

                            <img src={WorkingGroup} alt="" />
                        </FlexG42>
                    </SideBox>

                    <LateralGrid>
                        <ColorBox>
                            <BoxSubtitle>Gestão da Mudança</BoxSubtitle>
                            <BoxText marginLeft="20px">
                                Gerenciar a transição para práticas ágeis,
                                ajudando a equipe e a organização a se adaptarem
                                a uma abordagem mais flexível e iterativa.
                            </BoxText>
                        </ColorBox>
                        <ColorBox backgroundColor="#046AD0">
                            <BoxSubtitle>Criação de Cultura Ágil</BoxSubtitle>
                            <BoxText marginLeft="20px">
                                Fomentar uma cultura organizacional que valorize
                                os princípios ágeis, como colaboração,
                                aprendizado contínuo e adaptação.
                            </BoxText>
                        </ColorBox>
                        <ColorBox backgroundColor="#D6E7FF">
                            <BoxSubtitle color="#323232">
                                Medição e Monitoramento
                            </BoxSubtitle>
                            <BoxText marginLeft="20px" color="#323232">
                                Estabelecer métricas relevantes para avaliar o
                                progresso e o desempenho da equipe, utilizando
                                essas informações para tomada de decisões
                                informada.
                            </BoxText>
                        </ColorBox>
                    </LateralGrid>
                </GridABB>
            </ContainerItems>
        </MainContainer>
    );
};

export default Agile;
