import { LazyImage } from '../../Ui/lazy-image';

interface IInfoCardProps {
    lazyImageSrc: string;
    lazyImageAlt: string;
    lazyImageAriaLabel: string;
    title?: string;
    description?: string;
    ariaLabelledBy?: string;
}

export const InfoCard: React.FC<IInfoCardProps> = ({
    lazyImageSrc,
    lazyImageAlt,
    lazyImageAriaLabel,
    title,
    description,
    ariaLabelledBy,
}) => {
    return (
        <article
            className="w-full max-w-[22.375rem] px-4 py-[0.375rem] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] 
                       rounded-lg flex flex-col gap-4
                       md:w-[27.6875rem] md:h-[8.25rem]"
            role="article"
            {...(ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy })}
        >
            <div className="flex items-center ">
                <figure className="flex-shrink-0">
                    <LazyImage
                        src={lazyImageSrc}
                        alt={lazyImageAlt}
                        className="w-[7.875rem] h-[7.5rem]"
                        ariaLabel={lazyImageAriaLabel}
                    />
                </figure>
                <div>
                    {title && (
                        <h3
                            className="text-blue-900 text-base font-medium font-['Radio_Canada'] leading-tight
                                        lg:text-xl lg:leading-normal"
                        >
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p
                            className="text-blue-900 text-sm font-normal font-['Radio_Canada'] leading-tight
                                    lg:text-base lg:leading-snug"
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </article>
    );
};
