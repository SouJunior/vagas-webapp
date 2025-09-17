import { LazyImage } from '../../Ui/lazy-image';

interface IInfoCardProps {
  className?: string;
  lazyImageSrc: string;
  lazyImageAlt: string;
  lazyImageAriaLabel: string;
  title?: string;
  description?: string;
  ariaLabelledBy: string;
}

export const InfoCard: React.FC<IInfoCardProps> = ({
  className,
  lazyImageSrc,
  lazyImageAlt,
  lazyImageAriaLabel,
  title,
  description,
  ariaLabelledBy,
}) => {
  return (
    <article
      className={`flex w-full max-w-[22.375rem] flex-col gap-4 rounded-lg bg-white px-4 py-[0.375rem] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] md:h-[8.25rem] md:w-[27.6875rem] ${className}`}
      role="article"
      aria-labelledby={ariaLabelledBy}
    >
      <div className="flex items-center">
        <figure className="flex-shrink-0">
          <LazyImage
            src={lazyImageSrc}
            alt={lazyImageAlt}
            className="h-[7.5rem] w-[7.875rem]"
            ariaLabel={lazyImageAriaLabel}
          />
        </figure>
        <div>
          {title && (
            <h3
              id={ariaLabelledBy}
              className="font-font-canada text-base font-medium leading-tight text-blue-900 lg:text-xl lg:leading-normal"
            >
              {title}
            </h3>
          )}

          {description && (
            <p className="font-font-canada text-sm font-normal leading-tight text-blue-900 lg:text-base lg:leading-snug">
              {description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};
