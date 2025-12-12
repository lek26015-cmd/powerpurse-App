import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Search, Filter, Mic, MoreVertical, Play, Calendar as CalendarIcon, Clock } from 'lucide-react';

export const FileManagement: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const files = [
        { id: 1, title: 'Design Sprint Notes', date: '2023-10-24', duration: '45:20', size: '25 MB', tag: 'Work' },
        { id: 2, title: 'Grocery List', date: '2023-10-23', duration: '02:30', size: '1.2 MB', tag: 'Personal' },
        { id: 3, title: 'Project Kickoff', date: '2023-10-20', duration: '1:15:00', size: '42 MB', tag: 'Work' },
        { id: 4, title: 'Guitar Riff Idea', date: '2023-10-18', duration: '00:45', size: '0.5 MB', tag: 'Music' },
        { id: 5, title: 'Lecture 101: History', date: '2023-10-15', duration: '55:00', size: '30 MB', tag: 'Study' },
    ];

    const filteredFiles = files.filter(file => {
        const matchesFilter = activeFilter === 'All' || file.tag === activeFilter;
        const matchesSearch = file.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <header className="flex flex-col gap-4 mb-2">
                <h1 className="text-2xl font-bold text-white">My Recordings</h1>

                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                        <input
                            type="text"
                            placeholder="Search files..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/10 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-colors"
                        />
                    </div>
                    <Button variant="secondary" size="icon" className="!rounded-xl">
                        <Filter className="w-4 h-4" />
                    </Button>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {['All', 'Work', 'Personal', 'Music', 'Study'].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveFilter(tag)}
                            className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${activeFilter === tag
                                    ? 'bg-pink-500 text-white font-medium shadow-md'
                                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </header>

            <div className="space-y-3">
                {filteredFiles.length > 0 ? (
                    filteredFiles.map((file) => (
                        <Card key={file.id} variant="glass" className="p-4 group hover:bg-white/15 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-colors">
                                    <Mic className="w-5 h-5 text-pink-400" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-white truncate">{file.title}</h3>
                                    <div className="flex items-center gap-3 text-xs text-white/50 mt-1">
                                        <span className="flex items-center gap-1"><CalendarIcon className="w-3 h-3" /> {file.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {file.duration}</span>
                                        <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">{file.tag}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                                        <Play className="w-4 h-4 fill-current" />
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div className="text-center py-10 text-white/40 text-sm">
                        No recordings found.
                    </div>
                )}
            </div>
        </div>
    );
};
