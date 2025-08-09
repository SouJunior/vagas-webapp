interface FeatureCardProps {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    imgSrc,
    imgAlt,
}) => {
    return (
        <div
            className="flex items-center justify-center w-[350px] py-1.5 px-4 bg-white rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] flex-col md:max-w-[365px] md:h-32 lg:min-w-[443px]"
            aria-labelledby="section-benefits"
        >
            <ul className="flex flex-wrap gap-6">
                <li
                    className="flex flex-col"
                    role="article"
                    aria-labelledby="card-why"
                >
                    <figure className="flex items-center h-auto">
                        <img
                            className="w-[126px] md:w-24 lg:w-[126px]"
                            src={imgSrc}
                            alt={imgAlt}
                            loading="lazy"
                        />
                        <figcaption className="flex flex-col gap-1 ">
                            <h3
                                id="card-why"
                                className="text-blue-900 text-base font-medium leading-tight"
                            >
                                {title}
                            </h3>
                            <p className="text-blue-900 text-sm font-normal leading-tight">
                                {description}
                            </p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    );
};
