import styled from 'styled-components';
import devices from './devices';

export const Container = styled.main`
    height: 100vh;
    overflow-y: auto;
    width: 100vw;
    font-family: 'Radio Canada', sans-serif;
`;


export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    img {
        width: 100%;
        max-width: 300px;
    }
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 75px;
        margin: 1rem 0;
        color: #001633;
    }
    p {
        font-size: 1.5rem;
        margin: 2rem 0;
        color: #338AFF;
        font-weight: 600;
        line-height: 28px;
    }
    a {
        padding: 1rem 2rem;
        background-color: #003986;
        color: #fff;
        border-radius: 8px;
        text-decoration: none;
        transition: 0.3s;
        font-size: 1.5rem;
        &:hover {
            background-color: #0056b3;
        }


        }
        
        @media ${devices.tablet} {
            h1{
                font-size: 1.4rem;
            }

            p{
                font-size: 1rem;
            }
            a{
            
            font-size: 1rem;
            }
    }

`