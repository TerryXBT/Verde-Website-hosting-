'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Melbourne Resident",
    location: "Richmond, VIC",
    content: "Verde helped me reduce my carbon footprint by 40% in just 3 months. The persona system makes it feel like a game!",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Thompson",
    role: "Sustainability Consultant",
    location: "South Yarra, VIC",
    content: "Finally, an app that uses real Melbourne data. The insights are incredibly accurate and actionable.",
    rating: 5,
    avatar: "MT"
  }
];

const partners = [
  "City of Melbourne",
  "EPA Victoria",
  "Sustainability Victoria",
  "Melbourne University",
  "RMIT Sustainability"
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed mb-8">
              "Verde transformed how I think about my daily choices. Seeing my Carbon Persona evolve from 
              <span className="text-emerald-600 font-medium"> 'Climate Curious' to 'Eco Warrior' </span>
              was incredibly motivating."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                JM
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Jessica Martinez</div>
                <div className="text-gray-600">Environmental Scientist, Carlton</div>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-8 font-medium">TRUSTED BY LEADING ORGANIZATIONS</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-gray-600 font-medium text-sm sm:text-base hover:opacity-100 transition-opacity duration-200"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}