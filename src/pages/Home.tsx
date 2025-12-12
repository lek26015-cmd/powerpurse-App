import React from 'react';
import { Card } from '../components/Card';
import { Battery, Wifi, Mic, Play, MoreVertical } from 'lucide-react';

interface HomeProps {
    onPlay: () => void;
    onOpenSummary: () => void;
}

export const Home: React.FC<HomeProps> = ({ onPlay, onOpenSummary }) => {
    const recentRecordings = [
        { id: 1, title: 'Lecture: Advanced React', date: 'Today, 10:00 AM', duration: '45:20', type: 'Lecture' },
        { id: 2, title: 'Team Meeting', date: 'Yesterday, 2:30 PM', duration: '1:02:15', type: 'Meeting' },
        { id: 3, title: 'Product Idea', date: 'Dec 10, 9:15 AM', duration: '05:45', type: 'Idea' },
    ];

    return (
        <div className="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="flex justify-between items-center mb-2">
                <div>
                    <h1 className="text-2xl font-bold text-white">Good Morning,</h1>
                    <p className="text-white/60">Ready to capture your day?</p>
                </div>
                <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold shadow-md border border-white/20">
                    JD
                </div>
            </header>

            {/* Device Status Card */}
            <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none relative overflow-hidden p-5 shadow-lg">
                <div className="relative z-10 flex justify-between items-start mb-6">
                    <div>
                        <h3 className="font-medium opacity-90 text-lg">Power Purse</h3>
                        <div className="flex items-center gap-1.5 mt-1">
                            <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                            <p className="text-xs opacity-70">Connected</p>
                        </div>
                    </div>
                    <Wifi size={20} className="opacity-80" />
                </div>
                <div className="relative z-10 flex items-end gap-3">
                    <Battery size={36} className="opacity-100" />
                    <span className="text-4xl font-bold tracking-tight">85%</span>
                </div>

                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-50" />
            </Card>



            {/* Quick Actions */}
            <h3 className="text-sm font-semibold text-white/50 mb-3 tracking-wider uppercase text-[10px] mt-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
                <Card interactive onClick={onOpenSummary} className="bg-white/10 border-white/10 flex flex-col items-center justify-center py-6 gap-3 group backdrop-blur-md">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 flex items-center justify-center text-pink-400 shadow-sm group-hover:scale-110 transition-transform duration-200">
                        <Mic size={22} />
                    </div>
                    <span className="text-sm font-semibold text-white">New Recording</span>
                </Card>
                <Card interactive onClick={onPlay} className="bg-white/5 border-white/5 flex flex-col items-center justify-center py-6 gap-3 group backdrop-blur-md">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-200">
                        <Play size={22} className="ml-1" />
                    </div>
                    <span className="text-sm font-semibold text-white">Resume Last</span>
                </Card>
            </div>

            {/* Recent Recordings */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-white">Recent Recordings</h2>
                    <button className="text-xs font-medium text-white/60 hover:text-white transition-colors">View All</button>
                </div>

                <div className="space-y-3">
                    {recentRecordings.map(rec => (
                        <Card key={rec.id} variant="glass" interactive onClick={onPlay} className="flex items-center justify-between p-4 group">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 flex items-center justify-center text-pink-400 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-colors">
                                    <Mic size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-sm">{rec.title}</h3>
                                    <p className="text-xs text-white/50 mt-0.5">{rec.date} • {rec.duration}</p>
                                </div>
                            </div>
                            <button onClick={(e) => { e.stopPropagation(); onOpenSummary(); }} className="p-2 text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/10">
                                <MoreVertical size={18} />
                            </button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
