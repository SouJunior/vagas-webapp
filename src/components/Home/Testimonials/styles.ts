import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: 1200px) {
        flex-direction: column;
    }

    @media (max-width: 320px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 260px;
        height: 1000px;
        
    }
`;

export const TestimonialsContainer = styled.div`
    padding: 20px;
    border: 2px solid #515151;
    border-radius: 4px;
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
    font-size: 24px;
    font-weight: 500;
    color: #515151;
    width: 100%;
    max-width: 793px;

    @media (max-width: 320px) {
        font-size: 14px;
        display: flex;
        align-items: center;
    }
`;

export const Author = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #515151;
    margin-top: 10px;

    @media (max-width: 320px) {
        font-size: 16px;
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