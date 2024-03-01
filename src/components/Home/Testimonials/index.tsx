import { TestimonialType } from '../../../@types/testimonial-type';
import {
    Author,
    ImageContainer,
    Testimonial,
    TestimonialsContainer,
    Container,
} from './styles';
import { useState, useEffect } from 'react';

const Testimonials: React.FC<TestimonialType> = (props) => {
    const [isWidthLessThan1200, setIsWidthLessThan1200] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWidthLessThan1200(window.innerWidth < 1200);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>
            {isWidthLessThan1200 ? (
                <>
                    <TestimonialsContainer>
                        <Testimonial>{props.Text}</Testimonial>
                        <br />
                        <ImageContainer>
                            <img src={props.Profile} alt={props.Author} />
                        </ImageContainer>
                        <Author>
                            {props.Author},{props.Workplace}
                        </Author>
                        <br />
                    </TestimonialsContainer>
                </>
            ) : (
                <>
                    <TestimonialsContainer>
                        <Testimonial>{props.Text}</Testimonial>
                        <Author>
                            {props.Author}, {props.Workplace}
                        </Author>
                    </TestimonialsContainer>
                    <ImageContainer>
                        <img src={props.Profile} alt={props.Author} />
                    </ImageContainer>
                </>
            )}
        </Container>
    );
};

export default Testimonials;
