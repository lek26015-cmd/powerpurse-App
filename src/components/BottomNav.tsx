import React from 'react';
import { Home, Folder, Calendar, User, Mic } from 'lucide-react';

interface BottomNavProps {
    currentTab: string;
    onTabChange: (tab: string) => void;
    onRecord: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange, onRecord }) => {
    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'files', icon: Folder, label: 'Files' },
        { id: 'calendar', icon: Calendar, label: 'Calendar' },
        { id: 'profile', icon: User, label: 'Profile' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-cream pb-safe pt-2 px-6 z-50 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-end h-16 max-w-md mx-auto relative pb-2">
                {/* FAB Button - Centered/Floating */}
                <div className="absolute left-1/2 -top-10 -translate-x-1/2 rounded-full p-2 bg-cream/50 backdrop-blur-sm">
                    <button
                        onClick={onRecord}
                        className="h-16 w-16 bg-deep-ocean rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-all text-2xl ring-4 ring-white"
                    >
                        <Mic size={28} />
                    </button>
                </div>

                {navItems.map((item, index) => {
                    // Insert spacer after the second item (index 0, 1 ... spacer ... 2, 3)
                    // If index is 2 (Calendar), it's the 3rd item. Wait.
                    // Items are: 0: Home, 1: Files, 2: Calendar, 3: Profile.
                    // We want: Home, Files, [GAP], Calendar, Profile.
                    // So before rendering item 2, render gap? Or after 1.

                    return (
                        <React.Fragment key={item.id}>
                            {index === 2 && <div className="w-12" />}

                            <button
                                onClick={() => onTabChange(item.id)}
                                className={`flex flex-col items-center justify-center w-14 gap-1 transition-colors ${currentTab === item.id ? 'text-deep-ocean' : 'text-gray-400 hover:text-deep-ocean/60'
                                    }`}
                            >
                                <item.icon size={24} strokeWidth={currentTab === item.id ? 2.5 : 2} />
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </button>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};
