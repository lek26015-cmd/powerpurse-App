import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-deep-ocean text-white pb-28 font-sans selection:bg-pink-500/30">
            <div className="mx-auto max-w-lg min-h-screen relative">
                {children}
            </div>
        </div>
    );
};
