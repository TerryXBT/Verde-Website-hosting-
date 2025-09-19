'use client';

import { motion } from 'framer-motion';
import { Leaf, Calculator, TrendingUp, QrCode } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden bg-white"
            aria-label="Verde Carbon Persona Hero Section"
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">

                    {/* Left Content */}
                    <div className="space-y-8 lg:space-y-12">
                        {/* Main Headline */}
                        <div className="space-y-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-gray-900 leading-tight"
                            >
                                Your Carbon,
                                <br />
                                <span className="text-emerald-600">Your Verde.</span>
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
                            className="flex flex-col sm:flex-row gap-3"
                        >
                            <a
                                href="#"
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-emerald-200 bg-white text-gray-900 text-base font-medium shadow-sm transition hover:shadow"
                            >
                                <Image
                                    src="/images/app-store.png"
                                    alt="Download on the App Store"
                                    width={28}
                                    height={28}
                                />
                                App Store
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-emerald-200 bg-white text-gray-900 text-base font-medium shadow-sm transition hover:shadow"
                            >
                                <Image
                                    src="/images/google-play.png"
                                    alt="Get it on Google Play"
                                    width={28}
                                    height={28}
                                />
                                Google Play
                            </a>
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
                                {/* Dark Phone Frame */}
                                <div className="relative w-72 sm:w-80 h-[560px] sm:h-[600px] rounded-[3rem] bg-gradient-to-b from-black via-gray-900 to-gray-800 p-[14px] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
                                    <div className="w-full h-full rounded-[2.6rem] overflow-hidden bg-white">

                                        {/* Minimal Status Bar */}
                                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-white">
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
                                        <div className="p-6 space-y-6 bg-gray-50 h-full">

                                            {/* Carbon Persona Badge */}
                                            <div className="flex items-center gap-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
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

                                </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
