import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic Recording",
    price: "$80",
    duration: "per hour",
    features: [
      "Professional recording studio",
      "Experienced sound engineer",
      "Basic mixing included",
      "Up to 4 tracks",
      "Digital delivery"
    ]
  },
  {
    name: "Pro Package",
    price: "$300",
    duration: "per song",
    features: [
      "Everything in Basic",
      "Advanced mixing & mastering",
      "Unlimited tracks",
      "2 revision rounds",
      "Studio musicians available",
      "Priority scheduling"
    ],
    featured: true
  },
  {
    name: "Custom Project",
    price: "Custom",
    duration: "per project",
    features: [
      "Tailored to your needs",
      "Full production support",
      "Unlimited revisions",
      "Marketing consultation",
      "Distribution guidance"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect package for your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gray-900 rounded-lg overflow-hidden ${
                plan.featured ? 'ring-2 ring-red-500' : ''
              }`}
            >
              {plan.featured && (
                <div className="bg-red-500 text-white text-center py-2">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;