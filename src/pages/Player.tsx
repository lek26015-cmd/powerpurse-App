import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, FileText, Languages, Mic, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Player: React.FC<{
    onClose?: () => void;
    onOpenSummary?: (tab: 'summary' | 'transcript' | 'translation') => void;
}> = ({ onClose, onOpenSummary }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showAiActions, setShowAiActions] = useState(false);

    return (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col animate-in slide-in-from-bottom duration-300 pb-safe">
            {/* Header */}
            <div className="flex justify-between items-center p-6 pt-safe-top">
                <button onClick={onClose} className="p-2 -ml-2 text-deep-ocean hover:bg-black/5 rounded-full transition-colors">
                    <ChevronDown size={28} />
                </button>
                <span className="font-semibold text-deep-ocean/80 text-sm tracking-widest uppercase">Now Playing</span>
                <div className="w-8" />
            </div>

            {/* Visualizer Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 gap-8">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-deep-ocean to-[#4A5D8F] shadow-[0_20px_50px_-12px_rgba(44,54,90,0.5)] flex items-center justify-center relative overflow-hidden ring-8 ring-white/40 backdrop-blur-sm">
                    {/* Visualizer Mock */}
                    <div className="flex items-center gap-1.5 h-32">
                        {[...Array(16)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2.5 bg-white/90 rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                style={{
                                    height: `${20 + Math.random() * 80}%`,
                                    animationDelay: `${i * 0.1}s`,
                                    animationDuration: '0.8s'
                                }}
                            />
                        ))}
                    </div>
                    {/* Reflection shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                </div>

                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-deep-ocean leading-tight">Lecture: Advanced React</h2>
                    <p className="text-deep-ocean/60 font-medium">Oct 24, 2023 • 45:20</p>
                </div>
            </div>

            {/* Controls */}
            <div className="px-8 pb-12 space-y-10">
                {/* Seeker */}
                <div className="w-full group cursor-pointer">
                    <div className="w-full h-1.5 bg-deep-ocean/10 rounded-full relative overflow-visible">
                        <div className="absolute left-0 top-0 h-full w-1/3 bg-deep-ocean rounded-full" />
                        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 h-5 w-5 bg-deep-ocean border-4 border-white rounded-full shadow-lg scale-100 transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex justify-between text-xs text-deep-ocean/60 mt-3 font-semibold font-mono">
                        <span>15:02</span>
                        <span>45:20</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between max-w-xs mx-auto px-4">
                    <button className="text-deep-ocean/60 hover:text-deep-ocean hover:bg-black/5 p-3 rounded-full transition-all"><SkipBack size={32} /></button>
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="h-24 w-24 bg-deep-ocean rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition-all ring-4 ring-cream"
                    >
                        {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" className="ml-2" />}
                    </button>
                    <button className="text-deep-ocean/60 hover:text-deep-ocean hover:bg-black/5 p-3 rounded-full transition-all"><SkipForward size={32} /></button>
                </div>

                {/* AI Actions Sheet Trigger */}
                <Button
                    className="w-full py-4 text-base font-semibold shadow-lg bg-white/90 backdrop-blur-md border border-white/50 hover:bg-white"
                    onClick={() => setShowAiActions(true)}
                    variant="secondary"
                >
                    ✨ AI Actions
                </Button>
            </div>

            {/* AI Actions Bottom Sheet */}
            {showAiActions && (
                <>
                    <div className="absolute inset-0 bg-deep-ocean/20 backdrop-blur-sm z-40 animate-in fade-in duration-300" onClick={() => setShowAiActions(false)} />
                    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] p-8 z-50 animate-in slide-in-from-bottom duration-300 shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.1)]">
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mb-8" />
                        <h3 className="text-xl font-bold text-deep-ocean mb-6 text-center">AI Actions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <Card
                                interactive
                                onClick={() => onOpenSummary?.('summary')}
                                className="flex flex-col items-center justify-center gap-3 p-6 bg-cream/30 border-none hover:bg-cream/50"
                            >
                                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-deep-ocean shadow-sm">
                                    <FileText size={24} />
                                </div>
                                <span className="text-sm font-semibold text-deep-ocean">Summarize</span>
                            </Card>
                            <Card
                                interactive
                                onClick={() => onOpenSummary?.('translation')}
                                className="flex flex-col items-center justify-center gap-3 p-6 bg-cream/30 border-none hover:bg-cream/50"
                            >
                                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-deep-ocean shadow-sm">
                                    <Languages size={24} />
                                </div>
                                <span className="text-sm font-semibold text-deep-ocean">Translate</span>
                            </Card>
                            <Card interactive className="col-span-2 flex flex-row items-center justify-center gap-4 p-5 bg-deep-ocean text-white border-none shadow-lg hover:bg-deep-ocean/90 mt-2">
                                <Mic size={24} />
                                <span className="text-base font-semibold">Generate Podcast</span>
                            </Card>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
