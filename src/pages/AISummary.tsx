import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Share2, ArrowLeft, MoreHorizontal, Download, Copy, ThumbsUp, Languages, Globe } from 'lucide-react';
import { Button } from '../components/Button';

export const AISummary: React.FC<{ onBack: () => void; initialTab?: 'summary' | 'transcript' | 'translation' }> = ({ onBack, initialTab = 'summary' }) => {
    const [activeTab, setActiveTab] = useState<'summary' | 'transcript' | 'translation'>(initialTab);

    return (
        <div className="min-h-screen bg-deep-ocean flex flex-col animate-in slide-in-from-right duration-300">
            {/* Header */}
            <header className="bg-deep-ocean/80 backdrop-blur-md px-6 pt-12 pb-4 shadow-sm z-10 sticky top-0 border-b border-white/10">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={onBack} className="p-2 -ml-2 text-white hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft size={24} />
                    </button>
                    <div className="flex gap-2">
                        <button className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"><Share2 size={24} /></button>
                        <button className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"><MoreHorizontal size={24} /></button>
                    </div>
                </div>
                <h1 className="text-xl font-bold text-white">Lecture: Advanced React</h1>
                <p className="text-sm text-white/60 mt-1">Oct 24, 2023 • 45:20</p>

                {/* Tabs */}
                <div className="flex gap-6 mt-6 border-b border-white/10">
                    {['Summary', 'Transcript', 'Translation'].map((tab) => {
                        const id = tab.toLowerCase();
                        const isActive = activeTab === id;
                        return (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id as any)}
                                className={`pb-3 text-sm font-semibold transition-colors relative ${isActive ? 'text-white' : 'text-white/40 hover:text-white/60'
                                    }`}
                            >
                                {tab}
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-full" />
                                )}
                            </button>
                        )
                    })}
                </div>
            </header>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 pb-32">
                {activeTab === 'summary' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <Card variant="glass" className="p-5 border-l-4 border-l-pink-500">
                            <h3 className="font-bold text-white mb-2">Key Takeaways</h3>
                            <ul className="list-disc list-inside space-y-2 text-sm text-white/80 leading-relaxed">
                                <li>React Hooks provide a way to use state without classes.</li>
                                <li>useEffect handles side effects like data fetching.</li>
                                <li>Custom hooks allow logic reuse across components.</li>
                                <li>Virtual DOM optimization strategies discussed.</li>
                            </ul>
                        </Card>

                        <div className="space-y-4">
                            <h3 className="font-bold text-white">Detailed Notes</h3>
                            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl shadow-sm text-sm text-white/80 leading-relaxed space-y-4 backdrop-blur-sm">
                                <p>The lecture started with an overview of the React rendering cycle. The professor emphasized that render does not always mean painting to the DOM.</p>
                                <p>
                                    <strong className="text-white">Section 1: Hooks Deep Dive</strong><br />
                                    We explored `useMemo` and `useCallback`. These are performance optimizations and should not be used prematurely.
                                </p>
                                <p>
                                    <strong className="text-white">Section 2: Component Composition</strong><br />
                                    Composition over inheritance was a major theme. Using `children` prop effectively can solve many prop-drilling issues.
                                </p>
                            </div>
                        </div>

                        {/* Community Sharing Feature */}
                        <Card className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-pink-500/20 p-5">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-bold text-white flex items-center gap-2">
                                    <Share2 size={16} className="text-pink-400" /> Community
                                </h3>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white font-medium shadow-sm border border-white/10">12 Likes</span>
                            </div>
                            <p className="text-sm text-white/70 mb-4">This note has been shared with the class group.</p>
                            <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                                    <ThumbsUp size={14} className="mr-1" /> Like
                                </Button>
                                <Button size="sm" variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                                    <Copy size={14} className="mr-1" /> Copy
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}

                {activeTab === 'transcript' && (
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl shadow-sm space-y-4 animate-in fade-in duration-300">
                        <div className="flex gap-3">
                            <span className="font-mono text-xs text-pink-400 mt-1">00:12</span>
                            <p className="text-sm text-white/80">Professor: "Good morning everyone. Today we are going to dive deep into React."</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-mono text-xs text-pink-400 mt-1">00:45</span>
                            <p className="text-sm text-white/80">Professor: "Open your laptops and let's look at the initialization code."</p>
                        </div>
                        {/* More lines would go here */}
                    </div>
                )}
                {activeTab === 'translation' && (
                    <div className="space-y-4 animate-in fade-in duration-300 pb-20">
                        {/* Language Selector */}
                        <div className="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-xl mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-white/60">English</span>
                                <ArrowLeft className="w-4 h-4 text-white/40 rotate-180" />
                                <span className="text-sm text-white font-medium">Thai</span>
                            </div>
                            <Languages className="w-4 h-4 text-pink-400" />
                        </div>

                        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl shadow-sm space-y-6 backdrop-blur-sm">
                            <div className="space-y-2">
                                <p className="text-xs text-pink-400 font-mono">00:12</p>
                                <p className="text-sm text-white/60 italic mb-1">"Good morning everyone. Today we are going to dive deep into React."</p>
                                <p className="text-sm text-white font-medium">"สวัสดีครับทุกคน วันนี้เราจะมาเจาะลึกเรื่อง React กัน"</p>
                            </div>

                            <div className="h-px bg-white/10" />

                            <div className="space-y-2">
                                <p className="text-xs text-pink-400 font-mono">00:45</p>
                                <p className="text-sm text-white/60 italic mb-1">"Open your laptops and let's look at the initialization code."</p>
                                <p className="text-sm text-white font-medium">"เปิดแล็ปท็อปของพวกคุณขึ้นมา แล้วมาดูโค้ดเริ่มต้นกันเถอะ"</p>
                            </div>

                            <div className="h-px bg-white/10" />

                            <div className="space-y-2">
                                <p className="text-xs text-pink-400 font-mono">02:15</p>
                                <p className="text-sm text-white/60 italic mb-1">"Hooks are functions that let you use state and other React features."</p>
                                <p className="text-sm text-white font-medium">"Hooks คือฟังก์ชันที่ช่วยให้คุณสามารถใช้งาน State และฟีเจอร์อื่นๆ ของ React ได้โดยไม่ต้องเขียน Class"</p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-4">
                            <span className="text-[10px] text-white/30 flex items-center gap-1">
                                <Globe size={10} /> Translated by Power Purse AI
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Floating Action for this page */}
            <div className="fixed bottom-8 right-6 z-20">
                <button className="h-14 w-14 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-transform hover:bg-pink-400">
                    <Download size={24} />
                </button>
            </div>
        </div>
    );
};
