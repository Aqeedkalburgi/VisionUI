'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CTA = () => {
  const benefits = [
    'No credit card required',
    '14-day free trial',
    'Cancel anytime',
    'Full feature access'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Content */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of developers building amazing applications. Start your free trial today and experience the difference.
          </motion.p>

          {/* Benefits */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-300 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm mt-6"
          >
            No setup required • Instant access • 24/7 support
          </motion.p>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"
        />
      </div>
    </section>
  )
}

export default CTA