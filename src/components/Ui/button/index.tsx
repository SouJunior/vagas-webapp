import { cva, cx, type VariantProps } from 'class-variance-authority';

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
    ' px-6 py-[8.5px] font-canada  font-medium text-sm max-w-[206px] max-h-[44px] md:py-[10.5px] lg:py-3 rounded-lg cursor-pointer capitalize disabled:cursor-not-allowed',
    {
        variants: {
            intent: {
                primary:
                    'bg-blue-200 text-white hover:bg-blue-300 active:bg-blue-400 focus:outline-2 focus:outline-blue-light300 disabled:bg-gray-disabled',
                secondary:
                    'bg-transparent border-2 p flex items-center border-blue-200 hover:border-blue-300 hover:text-blue-300 active:border-blue-400 active:text-blue-400 focus:outline-2 focus:outline-blue-light300 disabled:border-gray-disabled disabled:text-gray-disabled  ',
                tertiary:
                    'border-0 text-blue-200 hover:text-blue-300 active:text-blue-400 focus-visible:outline-hidden focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-blue-light300 disabled:text-gray-disabled',
            },
        },
        defaultVariants: {
            intent: 'primary',
        },
    },
);

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>,
        VariantProps<typeof buttonVariants> {
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    intent,
    disabled,
    ...props
}) => {
    return (
        <button
            type={props.type ?? 'button'}
            className={buttonVariants({ intent, className })}
            disabled={disabled || undefined}
            {...props}
        ></button>
    );
};
