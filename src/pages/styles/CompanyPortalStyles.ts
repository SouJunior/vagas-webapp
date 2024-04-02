import styled from 'styled-components';

export const Container = styled.div`
    font-family: Radio Canada;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    background: #fdfffc;
`;
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 60px;
    padding-bottom: 40px;

    h1 {
        font-size: 35px;
        font-weight: 700;
        color: #046ad0;
        padding-bottom: 60px;
    }
`;

export const ProfileImg = styled.img`
    cursor: ${(props) => (props.width === '10%' ? 'default' : 'pointer')};
    width: ${(props) => props.width};
    border-radius: 50%;
    object-fit: cover;
    margin: 0 15px;
    aspect-ratio: 4 / 4;
`;

export const Position = styled.div`
    margin-top: auto;
`;

export const Row = styled.div`
    width: 90%;
    border-top: 2px solid #979797;
    opacity: 0.2;
    margin-bottom: auto;
`;
export const Copyright = styled.span`
    font-size: 14px;
    opacity: 0.65;
    padding-bottom: 20px;
`;
export const JobButton = styled.button`
    background-color: #046ad0;
    color: #fdfdfd;
    width: 180px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;

    div:first-child {
        margin-right: 8px;
    }
`;
