import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    flex-direction: column;
    font-family: 'Radio Canada', sans-serif;

    @media (max-width: 320px) {
        display: flex;
        align-items: center;
        width: 260px;        
    }
`;

export const TestimonialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 320px) {
        width: 260px;
        display: flex;
        align-items: center;
    }
`;

export const Testimonial = styled.p`
    font-style: italic;
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    color: #515050;
    width: 100%;
    max-width: 793px;

    @media (max-width: 320px) {
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
    }
`;
export const AuthorAndWorkPlaceConteiner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 320px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify_content: center;
    }
`;

export const Author = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #046AD0;
    margin-top: 10px;

    @media (max-width: 320px) {
        font-size: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify_content: center;

    }
`;
export const WorkPlace = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #515151;
    margin-top: 10px;

    @media (max-width: 320px) {
        font-size: 12px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify_content: center;

    }
`;

export const ImageContainer = styled.div`
    width: 300px;
    border-radius: 50%;

    @media (max-width: 320px) {
        width: 100px;
        height: 100px;
    }
`;