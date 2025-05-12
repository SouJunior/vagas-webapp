import styled from 'styled-components';
import { Button } from '../../components/HeaderDefault/components/JobFilter/styles';

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

export const Header = styled.header``;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 70px;

    img {
        max-width: 204px;
        max-height: 76px;
    }
`;

export const HeaderNavigation = styled.ul`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const ListItem = styled.li`
    list-style: none;
    color: #082e54;
    font-family: 'Radio Canada';

    a {
        font-weight: bold;
        letter-spacing: 1px;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export const HireJuniorsSection = styled.section`
    background-color: #eaf5fe;
    background-image: url('../../assets/imgs/SouJuniorLogoHireJuniors.png');
`;

export const HireSectionWrapper = styled.div`
    display: grid;
    padding: 144px 70px 116px 70px;

    grid-template-columns: repeat(2, 1fr);
`;

export const HireTitle = styled.h1`
    font-weight: 700;
    font-size: 2.25rem;
    letter-spacing: 1px;
    color: #082e54;
    font-family: 'Radio Canada';
`;

export const HireDescription = styled.p`
    font-weight: 400px;
    color: #082e54;
    max-width: 520px;
    font-size: 2rem;
    font-family: 'Radio Canada';
    grid-column: 1;

    margin-top: 8px;
`;

export const ButtonRegister = styled(Button)`
    background-color: #046ad0;

    width: auto;
    max-width: 322px;

    height: auto;
    max-height: 80px;

    padding: 24px 24px;
    border-radius: 10px;

    grid-column: 1;
    margin-top: 24px;
    font-family: 'Radio Canada';
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 1px;
`;

export const Image = styled.img`
    max-width: 634px;
    max-height: 423px;
    grid-column: 2;
`;
