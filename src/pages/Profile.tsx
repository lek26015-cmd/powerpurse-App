import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { User, CreditCard, Bell, LogOut, ChevronRight, Shield, HelpCircle } from 'lucide-react';

export const Profile: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 animate-in slide-in-from-right duration-300">
            <header className="flex items-center gap-4 py-4">
                <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 to-purple-600">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="Profile"
                        className="w-full h-full rounded-full border-4 border-deep-ocean bg-white"
                    />
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white">Felix The Cat</h1>
                    <p className="text-sm text-pink-400">Pro Member</p>
                </div>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
                <Card variant="glass" className="p-3 flex flex-col items-center gap-1">
                    <span className="text-xl font-bold text-white">124</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-wide">Notes</span>
                </Card>
                <Card variant="glass" className="p-3 flex flex-col items-center gap-1">
                    <span className="text-xl font-bold text-white">42h</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-wide">Recorded</span>
                </Card>
                <Card variant="glass" className="p-3 flex flex-col items-center gap-1">
                    <span className="text-xl font-bold text-white">12%</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-wide">Used</span>
                </Card>
            </div>

            {/* Settings List */}
            <div className="space-y-4">
                <section>
                    <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 ml-1">Account</h3>
                    <Card variant="glass" className="p-0 overflow-hidden divide-y divide-white/10">
                        <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
                            <div className="flex items-center gap-3">
                                <User className="w-5 h-5 text-white/80" />
                                <span className="text-sm text-white">Personal Information</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/30" />
                        </button>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
                            <div className="flex items-center gap-3">
                                <CreditCard className="w-5 h-5 text-white/80" />
                                <span className="text-sm text-white">Subscription Plan</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/30" />
                        </button>
                    </Card>
                </section>

                <section>
                    <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 ml-1">App Settings</h3>
                    <Card variant="glass" className="p-0 overflow-hidden divide-y divide-white/10">
                        <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
                            <div className="flex items-center gap-3">
                                <Bell className="w-5 h-5 text-white/80" />
                                <span className="text-sm text-white">Notifications</span>
                            </div>
                            <div className="w-10 h-6 bg-purple-600 rounded-full relative">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                            </div>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-white/80" />
                                <span className="text-sm text-white">Privacy & Security</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/30" />
                        </button>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
                            <div className="flex items-center gap-3">
                                <HelpCircle className="w-5 h-5 text-white/80" />
                                <span className="text-sm text-white">Help & Support</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/30" />
                        </button>
                    </Card>
                </section>

                <Button variant="danger" className="mt-4 w-full shadow-none bg-red-500/10 hover:bg-red-500/20 text-red-400">
                    <LogOut className="w-4 h-4 mr-2" /> Log Out
                </Button>
            </div>
        </div>
    );
};
