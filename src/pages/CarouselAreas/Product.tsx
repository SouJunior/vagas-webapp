import { BoxContext, BoxSubitle, BoxTitle, FigureBox, ItemText, LargeBox, LateralGrid, ListItem, MainContainer, MainSection, MainText, StyledUl, Subsection, TextBox, Title } from "./styles"
import ProductFigure from '../../assets/imgs/product_figure.svg'

const Product: React.FC = () => {
    return (
        <MainContainer>
            <MainSection>
                <BoxTitle>
                    <Title>Produtos</Title>
                    <MainText>
                        A área de Produto é essencial na criação e evolução de produtos digitais, como aplicativos, plataformas ou serviços online. Os profissionais dessa área garantem que o produto atenda às necessidades dos usuários, seja competitivo no mercado e alcance os objetivos estratégicos da empresa. Suas responsabilidades variam ao longo do ciclo de vida do produto.
                    </MainText>
                </BoxTitle>
                <FigureBox>
                    <img src={ProductFigure} alt="Figura de uma caixa" />
                </FigureBox>
            </MainSection>
            <Subsection>
                <LateralGrid>
                <TextBox>
                    <BoxSubitle>
                    Desenvolvimento de Roadmap
                    </BoxSubitle>
                    <BoxContext>
                    Criar um roadmap que detalhe as próximas iterações do produto, incluindo novos recursos, melhorias e lançamentos.
                    </BoxContext>
                </TextBox>
                <TextBox>
                    <BoxSubitle>
                    Definição de Requisitos e Priorização
                    </BoxSubitle>
                    <BoxContext>
                        Trabalhar com diversas partes interessadas para definir requisitos claros para o produto. Priorizar recursos e funcionalidades com base no valor para o usuário e nos objetivos estratégicos.
                    </BoxContext>
                </TextBox>
                </LateralGrid>
                <LargeBox>
                    <StyledUl>
                        <div>
                            <ListItem>Definição de Visão e Estratégia</ListItem>
                            <ItemText>Desenvolver uma visão clara para o produto, alinhada aos objetivos da empresa. Criar e comunicar uma estratégia  para o desenvolvimento e lançamento do produto.</ItemText>
                        </div>
                        <div>
                            <ListItem>Pesquisa de mercado e usuário</ListItem>
                            <ItemText>Desenvolver uma visão clara para o produto, alinhada aos objetivos da empresa. Criar e comunicar uma estratégia  para o desenvolvimento e lançamento do produto.</ItemText>
                        </div>
                        <div>
                            <ListItem>Colaboração com Equipes Técnicas e Priorização</ListItem>
                            <ItemText>Trabalhar em estreita colaboração com equipes de desenvolvimento e design para garantir a execução eficaz da visão do produto.</ItemText>
                         </div>
                    </StyledUl>
                </LargeBox>
            </Subsection>
        </MainContainer>
    )
}; 

export default Product