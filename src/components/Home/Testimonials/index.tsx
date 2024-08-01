import { TestimonialType } from '../../../@types/testimonial-type';
import {
    Author,
    ImageContainer,
    Testimonial,
    TestimonialsContainer,
    Container,
    WorkPlace,
    AuthorAndWorkPlaceConteiner

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
                <>
                    <ImageContainer>
                        <img src={props.Profile} alt={props.Author} />
                    </ImageContainer>
                    <AuthorAndWorkPlaceConteiner>
                        <Author>
                                {props.Author}
                        </Author>
                        <WorkPlace>
                            {props.Workplace}
                        </WorkPlace>
                    </AuthorAndWorkPlaceConteiner>
                    <TestimonialsContainer>
                        <Testimonial>{props.Text}</Testimonial>
                    </TestimonialsContainer>
                </>
        </Container>
    );
};

export default Testimonials;
