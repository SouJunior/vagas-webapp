export interface ITestimonial {
    id: number;
    testimony: string;
    author: string;
    position: string;
    image: string;
}

export interface TestimonialSectionProps {
    testimonials?: ITestimonial[];
    className?: string;
}

export interface TestimonialCardProps {
    testimonial: ITestimonial;
    index?: number;
    total?: number;
    className?: string;
}

export interface TestimonialHeaderProps {
    title: string;
    className?: string;
}
