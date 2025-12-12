import React, { useState, useEffect } from 'react';
import { Mic, Radio, Rewind, FastForward, Play, X } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const PodcastStudio: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [state, setState] = useState<'generating' | 'ready'>('generating');

    useEffect(() => {
        // Simulate generation
        const timer = setTimeout(() => {
            setState('ready');
        }, 3000); // 3 seconds mock generation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col pt-safe-top">
            {/* Header */}
            <div className="p-6 flex justify-end">
                <button onClick={onClose} className="bg-white/50 p-2 rounded-full hover:bg-white transition-colors">
                    <X size={24} className="text-deep-ocean" />
                </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                {state === 'generating' ? (
                    <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center gap-8">
                        <div className="w-32 h-32 bg-deep-ocean rounded-full flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-deep-ocean/30 rounded-full animate-ping" />
                            <div className="absolute inset-0 bg-deep-ocean/20 rounded-full animate-ping animation-delay-300" />
                            <Radio size={48} className="text-white relative z-10 animate-pulse" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-deep-ocean mb-2">Generating Podcast...</h2>
                            <p className="text-deep-ocean/60">Converting your notes into a conversation.</p>
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom duration-500">
                        <Card className="bg-white p-6 shadow-xl border-none space-y-6">
                            <div className="aspect-square bg-gradient-to-br from-beige to-cream rounded-2xl flex items-center justify-center shadow-inner mb-2">
                                <Mic size={64} className="text-deep-ocean/20" />
                            </div>

                            <div className="text-left">
                                <span className="text-xs font-bold text-deep-ocean/40 tracking-wider uppercase">AI Generated</span>
                                <h2 className="text-xl font-bold text-deep-ocean leading-tight">Summary: Advanced React</h2>
                            </div>

                            <div className="flex items-center justify-between gap-4 pt-2">
                                <button className="text-deep-ocean/40 hover:text-deep-ocean transition-colors"><Rewind size={24} /></button>
                                <button className="h-16 w-16 bg-deep-ocean rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-all">
                                    <Play size={32} fill="currentColor" className="ml-1" />
                                </button>
                                <button className="text-deep-ocean/40 hover:text-deep-ocean transition-colors"><FastForward size={24} /></button>
                            </div>

                            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                <div className="w-1/3 bg-deep-ocean h-full rounded-full" />
                            </div>
                        </Card>

                        <div className="mt-8 flex gap-3">
                            <Button className="flex-1" variant="outline">Discard</Button>
                            <Button className="flex-1">Save to Library</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
