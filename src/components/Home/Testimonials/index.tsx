import Profile from '../../../assets/imgs/profile-depoimento.png';
import {
    Author,
    ImageContainer,
    Testimonial,
    TestimonialsContainer,
    Container,
} from './styles';

const Testimonials: React.FC = () => {
    return (
        <Container>
            <TestimonialsContainer>
                <Testimonial>
                    “A SouJunior foi uma adição muito necessária na minha
                    carreira profissional, eu ainda estava no começo da minha
                    jornada como Designer e tive a oportunidade de integrar o
                    time e me desenvolver muito, aprendi como funcionava a
                    rotina, os métodos, as aplicações, por isso sou muito grato
                    e recomendo o projeto!”
                </Testimonial>
                <Author>Lucas Sales, UX Designer na Ilegra</Author>
            </TestimonialsContainer>
            <ImageContainer>
                <img src={Profile} alt="" />
            </ImageContainer>
        </Container>
    );
};

export default Testimonials;
