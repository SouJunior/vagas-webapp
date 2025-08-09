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
        <section
            className="w-full max-w-[1440px] min-w-96 px-8 py-6 flex flex-wrap justify-start items-stretch gap-6"
            aria-labelledby="section-benefits"
        >
            <h2 id="section-benefits" className="sr-only">
                Leidejane
            </h2>

            <ul className="flex flex-wrap gap-6">
                <li
                    className="w-96 bg-white rounded-[10px] shadow-md flex flex-col p-4"
                    role="article"
                    aria-labelledby="card-why"
                >
                    <figure className="flex gap-4 items-center">
                        <img
                            className="w-32 h-28 object-contain"
                            src={imgSrc}
                            alt={imgAlt}
                        />
                        <figcaption className="flex-1 flex flex-col gap-1">
                            <h3
                                id="card-why"
                                className="text-blue-900 text-xl font-medium leading-normal"
                            >
                                {title}
                            </h3>
                            <p className="text-blue-900 text-base leading-snug">
                                {description}
                            </p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    );
};
