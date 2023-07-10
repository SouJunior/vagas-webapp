import styled from "styled-components";

export const Description = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 17px;
    padding-bottom: 28px;
    border-bottom-width: 1px;
    font-size: 14px;
    line-height: 17px;
    color: #515050;
    height: 330px;
`;

export const DescriptionPreview = styled(Description)`
    height: auto;
    border: none;
    padding-bottom: 0;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: break-word; 
`;

export const PreviewField = styled(DescriptionPreview)`
    margin-top: 16px;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: break-word;  
`;

export const Header = styled.header`
    padding: 1.1rem;
    border-width: 1px;
    border-radius: 6px;
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const HeaderPreview = styled(Header)`
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    span {
        gap: 26px;
        display: flex;
        flex-direction: row;
    }
`;

export const Title = styled.h1`
    font-size: 26px;
    max-width: 300px;
    font-weight: 600;
    color: #515050;
`;

export const Divider = styled.hr`
    margin-top: auto;
    margin-bottom: 30px;
    background-color: #e8e8e8;
`;

export const JobType = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #515050;
`;

export const Wrapper = styled.div`
    position: relative;
    cursor: pointer;
    margin-bottom: 16px;
    padding: 24px;
    border-width: 1px;
    border-radius: 6px;
    overflow-x: auto;
`;

export const WrapperPreview = styled(Wrapper)`
    display: flex;
    min-height: 330px;
    flex-direction: column;
    cursor: default;
    border: 1px solid #E8E8E8;
    width: 599px;
    height: 655px;
    margin-top: 32px;
    box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.08);
    word-break: break-all;
    overflow-wrap: break-word;
`