import styled from 'styled-components';

interface JobTypeProps {
    backgroundColor: string;
}

export const Wrapper = styled.article`
    position: relative;
`;
export const Header = styled.header``;
export const Title = styled.h1``;
export const JobType = styled.small<JobTypeProps>`
    background-color: ${({ backgroundColor }) => {
        switch (backgroundColor) {
            case 'Júnior':
                return `rgb(99 102 241);`;
            case 'Trainee':
                return `rgb(34 197 94);`;
            case 'Estágio':
                return `rgb(100 116 139);`;
            default:
                return `rgb(99 102 241);`;
        }
    }};
`;
export const Description = styled.div``;
export const Footer = styled.footer``;
export const Text = styled.p`
    word-wrap: break-word;
`;
