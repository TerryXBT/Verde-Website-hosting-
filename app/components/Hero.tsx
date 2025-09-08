'use client';

import { motion } from 'framer-motion';
import { Leaf, Calculator, TrendingUp, QrCode } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-50/30 overflow-hidden"
            aria-label="Verde Carbon Persona Hero Section"
        >
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 bg-gradient-radial from-emerald-100/20 via-transparent to-transparent" />

            {/* Floating Background Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-100/40 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-200/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '4s' }} />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">

                    {/* Left Content */}
                    <div className="space-y-8 lg:space-y-12">
                        {/* Main Headline */}
                        <div className="space-y-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]"
                            >
                                Your Carbon,
                                <br />
                                <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                                    Your Persona.
                                </span>
                            </motion.h1>
                        </div>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light"
                        >
                            Measure your footprint. Understand your habits. Change your future.
                        </motion.p>

                        {/* Enhanced CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-emerald-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-xl hover:shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Image
                                    src="/images/app-store.png"
                                    alt="App Store"
                                    width={32}
                                    height={32}
                                    className="mr-3 relative z-10"
                                />
                                <span className="relative z-10">App Store</span>
                            </button>

                            <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-emerald-500 text-white rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-emerald-600 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 shadow-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Image
                                    src="/images/google-play.svg"
                                    alt="Google Play"
                                    width={32}
                                    height={32}
                                    className="mr-3 relative z-10"
                                />
                                <span className="relative z-10">Google Play</span>
                            </button>
                        </motion.div>

                        {/* Enhanced QR Code Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-5 bg-white/95 backdrop-blur-md border border-gray-200 rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-200 group-hover:border-emerald-300 transition-colors duration-300">
                                <QrCode className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-base">Scan to download</p>
                                <p className="text-sm text-gray-600">Quick access on mobile</p>
                            </div>
                        </motion.div>

                        {/* Trust Line */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-sm text-gray-500 max-w-md"
                        >
                            Backed by national emission factors and Melbourne lifestyle data.
                        </motion.p>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Floating Animation */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 1, 0, -1, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative"
                            >
                                {/* Enhanced Phone Frame */}
                                <div className="relative w-72 sm:w-80 h-[580px] sm:h-[640px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl ring-1 ring-white/10">
                                    <div className="w-full h-full bg-gradient-to-b from-white to-gray-50 rounded-[2.5rem] overflow-hidden relative">

                                        {/* Enhanced Status Bar */}
                                        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                                            <span className="text-sm font-semibold text-gray-900">9:41</span>
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-1">
                                                    <div className="w-1 h-3 bg-gray-300 rounded-full" />
                                                    <div className="w-1 h-3 bg-gray-300 rounded-full" />
                                                    <div className="w-1 h-3 bg-gray-400 rounded-full" />
                                                    <div className="w-1 h-3 bg-green-500 rounded-full" />
                                                </div>
                                                <div className="w-6 h-3 bg-green-500 rounded-sm relative">
                                                    <div className="absolute right-0 top-0 w-1 h-1 bg-green-600 rounded-full" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* App Content */}
                                        <div className="p-6 space-y-6">

                                            {/* Enhanced Carbon Persona Badge */}
                                            <div className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-5 border border-emerald-100 shadow-sm">
                                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                                                    <Leaf className="w-7 h-7 text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-emerald-800 text-lg">Eco Warrior</p>
                                                    <p className="text-sm text-emerald-600 font-medium">Your Carbon Persona</p>
                                                </div>
                                                <div className="ml-auto">
                                                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                                                </div>
                                            </div>

                                            {/* Main Metric */}
                                            <div className="text-center py-6">
                                                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">2.4t</div>
                                                <div className="text-base text-gray-600 mb-4">CO₂ this month</div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "75%" }}
                                                        transition={{ duration: 1.5, delay: 1 }}
                                                        className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full"
                                                    />
                                                </div>
                                                <div className="text-xs text-gray-500 mt-2">25% below average</div>
                                            </div>

                                            {/* Quick Actions */}
                                            <div className="space-y-3">
                                                <button className="w-full flex items-center gap-3 bg-gray-50 rounded-xl p-4 text-left">
                                                    <Calculator className="w-5 h-5 text-gray-600" />
                                                    <span className="font-medium text-gray-900">Baseline Calculator</span>
                                                </button>

                                                <button className="w-full flex items-center gap-3 bg-gray-50 rounded-xl p-4 text-left">
                                                    <TrendingUp className="w-5 h-5 text-gray-600" />
                                                    <span className="font-medium text-gray-900">Progress Stats</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced Glow Effects */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-blue-400/20 rounded-[3rem] blur-3xl -z-10 scale-110 animate-pulse" />
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200/10 to-transparent rounded-[4rem] blur-2xl -z-20" />

                                {/* Floating particles */}
                                <div className="absolute top-10 left-5 w-2 h-2 bg-emerald-300/60 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                                <div className="absolute top-32 right-8 w-1.5 h-1.5 bg-blue-300/60 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                                <div className="absolute bottom-20 left-12 w-1 h-1 bg-green-300/60 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}