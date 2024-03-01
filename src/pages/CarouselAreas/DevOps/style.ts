import styled from 'styled-components';

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 72px;
    width: 100%;
    padding: 48px 48px 36px 48px;
    border-radius: 12px;
    border: 8px solid rgba(0, 0, 0, 0);
    background: #d6e7ff;
    grid-column-start: span 2;
`;

export const ListLight = styled.ul`
    margin-left: 12px;

    li {
        font-family: 'Radio Canada';
        font-size: 16px;
        font-weight: 500;
        line-height: 160%;
        color: #fff;
        opacity: 0.8;
    }
`;

export const MonitoringAndSecurityBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 24px 0 13px 0;
    border-radius: 12px;
    border: 8px solid rgba(0, 0, 0, 0);
    background: #d6e7ff;
    grid-row: span 2;
`;

export const ListDark = styled.ul`
    margin: 0 40px 0 50px;

    li {
        font-family: 'Radio Canada';
        font-size: 16px;
        font-weight: 500;
        color: #323232;
        opacity: 0.8;
    }
`;

export const TextSecurity = styled.p`
    margin: 0 45px 25px 45px;
    font-family: 'Radio Canada';
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    color: #323232;
    opacity: 0.8;
`;

export const MonitoringAndSecurityFigure = styled.figure`
    display: flex;
    justify-content: center;
`;

export const BlueHighContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 59px 23px 59px 45px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: #d6e7ff;
    grid-row: span 2;
    grid-column: span 2;
`;

export const DarkHighContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 24px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: #323232;
    grid-row: span 2;
`;

export const BlueDarkHighContainer = styled.div`
    padding: 33px 40px 45px 40px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: var(--Logo-Cor, #046ad0);
    grid-column: span 2;
`;

export const FigureDevOpsDev = styled.figure`
    display: flex;
    justify-content: center;
    border-radius: 12px;
    background: #d6e7ff;

    img {
        width: 270px;
        height: 200px;
    }
`;
