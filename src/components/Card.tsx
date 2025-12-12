import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    noPadding?: boolean;
    interactive?: boolean;
    variant?: 'default' | 'glass' | 'outlined';
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    noPadding = false,
    interactive = false,
    variant = 'default',
    ...props
}) => {
    const variants = {
        default: 'bg-white text-deep-ocean shadow-sm border border-cream',
        glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white',
        outlined: 'border border-white/20 bg-transparent text-white'
    };

    return (
        <div
            className={`
        rounded-2xl
        ${variants[variant]}
        ${interactive ? 'cursor-pointer hover:shadow-md transition-shadow duration-200' : ''}
        ${noPadding ? '' : 'p-4'}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};
