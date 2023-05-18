import {
    Author,
    ImageContainer,
    Testimonial,
    TestimonialsContainer,
    Container,
} from './styles';

interface TestimonialsProps {
    Text: string;
    Author: string;
    Workplace: string;
    Profile: string;
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {
    return (
        <Container>
            <TestimonialsContainer>
                <Testimonial>{props.Text}</Testimonial>
                <Author>
                    {props.Author},{props.Workplace}
                </Author>
            </TestimonialsContainer>
            <ImageContainer>
                <img src={props.Profile} alt={props.Author} />
            </ImageContainer>
        </Container>
    );
};

export default Testimonials;
