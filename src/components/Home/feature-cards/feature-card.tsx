import { IFeatureCard } from './types';

export const FeatureCard: React.FC<IFeatureCard> = ({
    id,
    title,
    description,
    imgSrc,
    imgAlt,
}) => {
    return (
        <article
            className="flex flex-col items-center justify-center w-[21.875rem] py-1.5 px-4 bg-white rounded-[0.625rem] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)]
                        md:max-w-[22.8125rem] md:h-32 lg:min-w-[27.6875rem]"
            aria-labelledby={id}
        >
            <figure className="flex items-center h-auto">
                <img
                    className="w-[7.875rem] md:w-24 lg:w-[7.875rem]"
                    src={imgSrc}
                    alt={imgAlt}
                    loading="lazy"
                />
                <figcaption className="flex flex-col gap-1 ">
                    <h3
                        id={id}
                        className="text-blue-900 text-base font-medium leading-tight"
                    >
                        {title}
                    </h3>
                    <p className="text-blue-900 text-sm font-normal leading-tight">
                        {description}
                    </p>
                </figcaption>
            </figure>
        </article>
    );
};
