'use client';

import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Target, Leaf, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: "Track Your Impact",
    description: "Log daily activities and see real-time carbon calculations based on Melbourne data.",
    color: "emerald"
  },
  {
    icon: TrendingUp,
    title: "Analyze Patterns",
    description: "Discover your carbon hotspots with detailed breakdowns and trend analysis.",
    color: "blue"
  },
  {
    icon: Target,
    title: "Set & Achieve Goals",
    description: "Create personalized reduction targets and track your progress over time.",
    color: "purple"
  }
];

const stats = [
  { icon: Users, value: "10,000+", label: "Active Users" },
  { icon: Leaf, value: "2.3M", label: "Tonnes Tracked" },
  { icon: Award, value: "35%", label: "Avg. Reduction" }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Three Steps to Your Carbon Persona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your environmental impact with data-driven insights tailored for Melbourne living.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300 border border-gray-200 h-full">

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  feature.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                  feature.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  'bg-purple-50 text-purple-600'
                }`}>
                  <feature.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Join Melbourne's Carbon Community
            </h3>
            <p className="text-gray-600 text-lg">
              Real people making real impact across Victoria
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-emerald-50 text-emerald-600">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
