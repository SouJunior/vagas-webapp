import styled from 'styled-components';

interface JobTypeProps {
    backgroundColor: string;
}

export const Wrapper = styled.article`
    position: relative;
    cursor: pointer;
    margin-bottom: 16px;
    padding: 24px;
    border-width: 1px;
    border-radius: 6px;
    box-shadow: 0px 2px 5px #1b1e2114;
`;

export const Header = styled.header`
    padding: 1.1rem;
    border-width: 1px;
    border-radius: 6px;
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 26px;
    font-weight: 600;
    color: #515050;
    position: relative;
`;

export const JobType = styled.small<JobTypeProps>`
    font-weight: 600;
    display: flex;
    margin-top: 3px;
    align-items: center;
    font-size: 16px;
    line-height: 19px;
    color: #515050;
`;

export const Date = styled.p`
    color: #aaaaaa;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-left: 7px;
`;

export const Description = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 17px;
    padding-bottom: 28px;
    border-bottom-width: 1px;
    font-size: 14px;
    line-height: 17px;
    color: #515050;
    max-height: 300px;
    overflow: scroll;
`;

export const Footer = styled.footer`
    padding-top: 1rem;
`;

export const Text = styled.p`
    word-wrap: break-word;
    text-align: justify;
`;

export const Button = styled.button`
    display: flex;
    font-weight: 600;
    color: white;
    font-size: 15px;
    line-height: 18px;
    padding-top: 13px;
    padding-bottom: 13px;
    gap: 6.5px;
    border-width: 1px;
    padding-left: 64px;
    padding-right: 64px;
    border-radius: 4px;
    border-color: #930000;
    background-color: #bd0000;
    margin: 4px;

    &:hover {
        background-color: #930000;
    }
`;
