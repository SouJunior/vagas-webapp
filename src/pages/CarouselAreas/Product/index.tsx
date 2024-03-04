import { Package, Circle } from 'phosphor-react';
import {
    BoxText,
    BoxSubtitle,
    BoxTitle,
    ColorBox,
    ContainerFigure,
    ContainerItems,
    ContaianerMarker,
    FlexG24,
    GridAAB,
    GridABB,
    ItemText,
    MainContainer,
    MainText,
    StyledLi,
    StyledUl,
    Subtitle,
    Title,
} from '../styles';

const Product: React.FC = () => {
    return (
        <MainContainer>
            <ContainerItems>
                <GridAAB>
                    <BoxTitle>
                        <Title>Produtos</Title>
                        <MainText>
                            A área de Produto é essencial na criação e evolução
                            de produtos digitais, como aplicativos, plataformas
                            ou serviços online. Os profissionais dessa área
                            garantem que o produto atenda às necessidades dos
                            usuários, seja competitivo no mercado e alcance os
                            objetivos estratégicos da empresa. Suas
                            responsabilidades variam ao longo do ciclo de vida
                            do produto.
                        </MainText>
                    </BoxTitle>
                    <ContainerFigure>
                        <Package />
                    </ContainerFigure>
                </GridAAB>

                <GridABB>
                    <FlexG24>
                        <ColorBox backgroundColor="#1165BA">
                            <BoxSubtitle>Desenvolvimento de Roadmap</BoxSubtitle>
                            <BoxText>
                                Criar um roadmap que detalhe as próximas
                                iterações do produto, incluindo novos recursos,
                                melhorias e lançamentos.
                            </BoxText>
                        </ColorBox>

                        <ColorBox backgroundColor="#1165BA">
                            <BoxSubtitle>
                                Definição de Requisitos e Priorização
                            </BoxSubtitle>
                            <BoxText>
                                Trabalhar com diversas partes interessadas para
                                definir requisitos claros para o produto.
                                Priorizar recursos e funcionalidades com base no
                                valor para o usuário e nos objetivos
                                estratégicos.
                            </BoxText>
                        </ColorBox>
                    </FlexG24>

                    <ColorBox gridArea="b">
                        <StyledUl>
                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>
                                        Definição de Visão e Estratégia
                                    </Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Desenvolver uma visão clara para o produto,
                                    alinhada aos objetivos da empresa. Criar e
                                    comunicar uma estratégia para o
                                    desenvolvimento e lançamento do produto.
                                </ItemText>
                            </FlexG24>

                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>
                                        Pesquisa de mercado e usuário
                                    </Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Pesquisas de mercado para entender as
                                    tendências, concorrência e demandas dos
                                    usuários. Coletar feedback contínuo dos
                                    usuários para informar decisões de design e
                                    desenvolvimento.
                                </ItemText>
                            </FlexG24>

                            <FlexG24>
                                <StyledLi>
                                    <ContaianerMarker>
                                        <Circle size={18} weight="fill" />
                                    </ContaianerMarker>
                                    <Subtitle>
                                        Colaboração com Equipes Técnicas e
                                        Priorização
                                    </Subtitle>
                                </StyledLi>
                                <ItemText>
                                    Trabalhar em estreita colaboração com
                                    equipes de desenvolvimento e design para
                                    garantir a execução eficaz da visão do
                                    produto.
                                </ItemText>
                            </FlexG24>
                        </StyledUl>
                    </ColorBox>
                </GridABB>
            </ContainerItems>
        </MainContainer>
    );
};

export default Product;
