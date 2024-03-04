import styled from "styled-components";

interface StyledBox{
    backgroundColor?: string,
    gridArea?: string,
}

interface Content{
    color?: string,
    marginLeft?: string,
    gridArea?: string,
}

interface GridArea{
    gridArea?: string
}

interface Picture {
    width?: string,
    maxWidth?: string,
    minWidth?: string,
    marginTop?: string,
}

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerItems = styled.div`
    display: grid;
    gap: 24px;
    max-width: 1440px;
    margin: 74px 0;
    

    @media (max-width: 1520px) {
        max-width: 1280px;
    }

    @media (max-width: 1366px) {
        max-width: 1200px;
    }

    @media (max-width: 1280px) {
        max-width: 1000px;
    }

    @media (max-width: 1024px) {
        max-width: 900px;
    }
`

export const GridAAB =  styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
    "a a b";
    gap: 24px;
`

export const GridABB = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
    "a b b";
    gap: 24px;

`

export const Grid3A = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
`

export const Grid2A = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "a b";
    gap: 24px
    
`

export const BoxTitle =  styled.div`
    height: auto;
    background-color: #D6E7FF;
    padding: 48px 48px 35px 48px;
    border-radius: 12px;
    grid-area: a;
`

export const Title = styled.h1`
    font-family: Radio Canada, sans-serif;
    font-size: 96px;
    font-weight: 600;
    line-height: 115px;
    letter-spacing: 0em;
    text-align: start;
    color: #1165BA;
`

export const MainText =  styled.p`
    font-family: Radio Canada, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 25.6px;
    letter-spacing: 0em;
    text-align: left;
    color: #323232;
    margin-top: 72px;
    opacity: 80%
`
export const FigureBox = styled.div`
    background-color: #1165BA;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: b;
    
    img{
        width: 200px;
        height: 200px;
    }

`

export const Img = styled.img`
    position: absolute;
    bottom: 0;
    right:0;
    object-fit: content;
`

export const SideBox = styled.div<GridArea>`
    background-color: #1165BA;
    padding: 24px 30px 24px 24px;
    border-radius: 12px;
    grid-area: ${props => props.gridArea ?? 'a' };
    gap: 42px;
    position: relative;

    img{
        margin-top: 59px;
    }
`
export const ColorBox =  styled.div<StyledBox>`
    background-color: ${props => props.backgroundColor ?? '#323232' };
    border-radius: 12px;
    padding: 55px 50px 41px 24px;
    grid-area: ${props => props.gridArea ?? 'a'};
`

export const BoxSubtitle = styled.h2<Content>`
    font-family: Radio Canada;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.color ?? '#FFF'};
    margin-bottom: 24px;
`

export const BoxText = styled.p<Content>`
    font-family: Radio Canada, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 25.6px;
    text-align: left;
    opacity: 80%;
    color: ${props => props.color ?? '#FFF'};
    margin-left ${props => props.marginLeft ?? '0px'}
`

export const LateralGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    grid-area: b;
`

export const ItemText = styled.div`
    font-family: Radio Canada, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    max-width: 583px;
    color: #FFF;
    opacity: 80%;
    margin-left: 48px;
`
export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 158px 53px 24px;
    gap: 42px;
    border-radius: 12px;
    background-color: #323232;
    grid-area: a;

`

export const Smallbox =  styled.div`
    background-color: #D6E7FF;
    border-radius: 12px;
    padding: 80px 24px;
`

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 42px;
`

export const FlexG42 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
    justify-content: center;
    align-items: center;
`
export const FlexG24 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    
    img{
       margin-top: 44px;
    }
`

export const ContainerFigure = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 8px solid rgba(0, 0, 0, 0);
    background: #1165ba;
    font-size: 200px;
    color: #fff;
`
export const ContaianerMarker = styled.div`
    font-sixe: 30px;
    color: #FFF;
    weight: fill;
`
export const Subtitle = styled.h3`
    font-family: Radio Canada;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    text-align: left;
`
export const StyledLi = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
// export const Img = styled.img<Picture>`
//     margin-top: ${props => props.marginTop ?? '44'}px;
//     max-width: ${props => props.maxWidth}px;
//     min-width: ${props => props.minWidth}px;
//     object-fit: contain;

//     @media (max-width: 1520px) {
//         max-width: ${props => `${0.85 * Number(props.maxWidth)}px`};
//     }

//     @media (max-width: 1366px) {
//         max-width: ${props => `${0.78 * Number(props.maxWidth)}px`};
//     }

//     @media (max-width: 1280px) {
//         max-width: ${props => `${0.65 * Number(props.maxWidth)}px`};
//     }

//     @media (max-width: 1024px) {
//         max-width: ${props => `${0.59 * Number(props.maxWidth)}px`};
//     }
// `


export const BoxFeatured = styled.div`
    background-color: #D6E7FF;
    padding: 12px 24px;
    border-radius: 12px;
    width: 76%;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;

    h2 {
        color: #046AD0;
        font-family: Radio Canada;
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
    }
`



export { }