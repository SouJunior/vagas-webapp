import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;

export const TestimonialsContainer = styled.div`
    padding: 20px;
    border: 2px solid #515151;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Testimonial = styled.p`
    font-style: italic;
    font-size: 24px;
    font-weight: 500;
    color: #515151;
    width: 100%;
    max-width: 793px;
`;

export const Author = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #515151;
    margin-top: 10px;
`;

export const ImageContainer = styled.div`
    width: 300px;
    border-radius: 50%;
`;