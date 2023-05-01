import  styled  from 'styled-components'

export const Container = styled.div`
    background-color: #fff
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
    border: 1px solid rgba(0, 0, 0, 0.05);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    gap: 12px;
    background-color: #fff;
    justify-content: space-between;
    width: 100vw;
    padding: 20px;   
    height: 132px;
`

export const Title = styled.div`
    color: white;
    display: flex;
    font-size: 44px;
    gap: 20px;
    font-weight: bold;
    place-self: center;

    img {
        margin-left: 38px;
    }
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

`;

export const Span = styled.span`
    color: white;
`;

export const RegisterButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    font-weight: 600;
    width: 262px;
    height: 52px;
    color: #fff;
    border-radius: 4px;
    :hover {
        opacity: 0.8;
    }
`

export const LoginButton = styled(RegisterButton)`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    :hover {
        opacity: 0.8;

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

