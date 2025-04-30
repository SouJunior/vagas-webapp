import styled from 'styled-components';

export const Card = styled.div`
    margin: 10px 0;
    border: solid rgba(172, 172, 172, 1) 1px;
    border-radius: 5px;
    width: 419px;
    font-family: 'Radio Canada';
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Radio Canada';
`;

export const Information = styled.div`
    display: flex;
`;

export const Image = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 25px;
    background-color: pink;
    margin-right: 15px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`;

export const Favorite = styled.div`
    width: 32px;
    height: 32px;
`;

export const ContainerStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: rgba(102, 102, 102, 1);
`;

export const InProgress = styled.div`
    font-family: 'Radio Canada';
    width: 129px;
    height: 38px;
    border-radius: 5px;
    gap: 8px;
    padding: 8px;
    background-color: rgba(16, 122, 14, 1);
    color: white;
    display: flex;
    justify-content: center;
    margin-left: 5px;
    font-size: 16px;
`;

export const Closed = styled.div`
    width: 129px;
    height: 38px;
    border-radius: 5px;
    gap: 8px;
    padding: 8px;
    background-color: rgba(167, 2, 29, 1);
    color: white;
    display: flex;
    justify-content: center;
    margin-left: 5px;
    font-size: 16px;
`;
