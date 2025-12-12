import React, { useState, useEffect } from 'react';
import { Mic, Square, Pause, Play } from 'lucide-react';

interface RecordingViewProps {
    onStop: () => void;
}

export const RecordingView: React.FC<RecordingViewProps> = ({ onStop }) => {
    const [duration, setDuration] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (!isPaused) {
            interval = setInterval(() => {
                setDuration(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed inset-0 bg-deep-ocean z-50 flex flex-col items-center justify-center animate-in fade-in duration-300">
            {/* Header */}
            <div className="absolute top-12 text-center text-white/60 text-sm tracking-wider uppercase">
                Recording New Note
            </div>

            {/* Visualizer Circle */}
            <div className="relative mb-12">
                {!isPaused && (
                    <>
                        <div className="absolute inset-0 bg-pink-500/20 rounded-full animate-ping delay-75" />
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping delay-300" />
                    </>
                )}
                <div className="h-32 w-32 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                    <Mic size={48} className="text-white" />
                </div>
            </div>

            {/* Timer */}
            <div className="text-6xl font-black text-white font-mono mb-16 tracking-tight">
                {formatTime(duration)}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-8">
                <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="h-14 w-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                    {isPaused ? <Play size={24} fill="currentColor" /> : <Pause size={24} fill="currentColor" />}
                </button>

                <button
                    onClick={onStop}
                    className="h-20 w-20 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center text-white shadow-lg shadow-red-500/30 transition-all hover:scale-105 active:scale-95"
                >
                    <Square size={32} fill="currentColor" />
                </button>

                {/* Placeholder for symmetry */}
                <div className="h-14 w-14" />
            </div>

            {/* Device Info */}
            <div className="absolute bottom-12 flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-white/60">Power Purse Connected</span>
            </div>
        </div>
    );
};
