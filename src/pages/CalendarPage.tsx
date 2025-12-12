import React from 'react';
import { Card } from '../components/Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CalendarPage: React.FC = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);
    const activeDates = [2, 5, 10, 15, 24]; // Mock data for days with recordings

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            <header className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-white">October 2023</h1>
                <div className="flex gap-2">
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </header>

            <Card variant="glass" className="p-4">
                <div className="grid grid-cols-7 gap-2 text-center mb-4">
                    {days.map(day => (
                        <div key={day} className="text-xs text-white/40 font-medium uppercase tracking-wider">{day}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {/* Padding for month start (mock) */}
                    <div />
                    <div />

                    {dates.map(date => {
                        const hasEvent = activeDates.includes(date);
                        const isToday = date === 24;

                        return (
                            <div key={date} className="aspect-square flex flex-col items-center justify-center relative cursor-pointer group">
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm transition-all
                    ${isToday
                                        ? 'bg-gradient-to-tr from-pink-500 to-purple-600 text-white font-bold shadow-lg shadow-purple-500/30'
                                        : 'text-white/80 hover:bg-white/10'
                                    }
                  `}>
                                    {date}
                                </div>
                                {hasEvent && !isToday && (
                                    <div className="absolute bottom-1 w-1 h-1 rounded-full bg-pink-400" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </Card>

            <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">Today's Schedule</h3>

                <div className="space-y-4">
                    <div className="relative pl-6 border-l-2 border-white/10 pb-6 last:pb-0">
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-deep-ocean" />
                        <Card variant="glass" className="p-4 hover:bg-white/15 transition-colors">
                            <span className="text-xs text-pink-400 font-medium">10:00 AM - 11:00 AM</span>
                            <h4 className="text-white font-medium mt-1">Design Sprint Review</h4>
                            <p className="text-white/50 text-xs mt-1">Room 304 • With Sarah & Mike</p>
                        </Card>
                    </div>

                    <div className="relative pl-6 border-l-2 border-white/10 pb-6 last:pb-0">
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-white/20 ring-4 ring-deep-ocean" />
                        <Card variant="glass" className="p-4 hover:bg-white/15 transition-colors opacity-60">
                            <span className="text-xs text-white/60 font-medium">02:30 PM - 03:30 PM</span>
                            <h4 className="text-white font-medium mt-1">Weekly Sync</h4>
                            <p className="text-white/50 text-xs mt-1">Google Meet</p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
