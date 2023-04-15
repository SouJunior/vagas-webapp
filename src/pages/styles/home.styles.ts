import  styled  from 'styled-components'

export const Container = styled.div`
    background: linear-gradient(294.77deg, rgba(10, 103, 199, 1) 50.32%, rgba(0, 114, 231, 0.67) 100%);
    background-position: right;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 44px;
    overflow-x: hidden;
    padding-bottom: 50px;
`

export const NavBar = styled.nav`
    display: flex;
    font-size: 40px;
    gap: 12px;
    background-color: #1165BA;
    justify-content: space-between;
    color: white;
    backdrop-filter: blur(50px);
    width: 100vw;
    padding: 20px;   
`

export const Title = styled.div`
    color: white;
    display: flex;
    font-size: 44px;
    font-family: Radio Canada;
    gap: 20px;
    font-weight: bold;
    place-self: center;
`

export const LinkTag = styled.div`
    margin-top: 5px
`; 

export const LinkContainer = styled.div`
    background-color: transparent;
    border: 2px dashed white;
    color: white;
    display: flex;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
    width: 30%;
    height: auto;
    padding-bottom: 40px;
    border-radius: 10px;
    font-size: 34px;

    h2 {
        font-size: 40px;
        margin-bottom: 14px;
        font-family: Radio Canada;
    }
`;

export const Span = styled.span`
    color: white;
`;

export const GreenButton = styled.button`
    background-color: green;
    font-size: 0.5em; 
    color: #fff;
    padding: 16px;
    border-radius: 8px;

    :hover {
        opacity: 0.7;
    }
`

export const WhiteButton = styled.button`
    background-color: White;
    color: #1165BA;
    font-size: 0.5em;
    padding: 14px 40px;
    border-radius: 6px;

    :hover {
        opacity: 0.7;

    }
`

export const Bar = styled.div`
border: 2px dashed white;
width: 500px;
max-height: 2px;
`
export const InputWrapper = styled.div`
    display: flex;

    button {
        background-color: green;
        color: #fff;
        padding: 0 20px;
    }

    input {
        outline: none;
    }
`;

export const List = styled.ul`
    color: white;
    font-size: 22px;

    h1 {
        margin-bottom: 12px;
        font-family: Radio Canada;
        font-size: 24px;
    }

    li {
        padding: 1px 0
    }
`;

