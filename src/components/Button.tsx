import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-deep-ocean/20 disabled:opacity-50 disabled:pointer-events-none active:scale-95 transition-transform duration-100';

    const variants = {
        primary: 'bg-deep-ocean text-white hover:bg-deep-ocean/90 shadow-sm',
        secondary: 'bg-cream text-deep-ocean hover:bg-cream/80',
        outline: 'border-2 border-deep-ocean text-deep-ocean hover:bg-deep-ocean/5',
        ghost: 'text-deep-ocean hover:bg-deep-ocean/10',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    const sizes = {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 py-2 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10 p-2',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {!isLoading && leftIcon && <div className="mr-2">{leftIcon}</div>}
            {children}
            {!isLoading && rightIcon && <div className="ml-2">{rightIcon}</div>}
        </button>
    );
};
