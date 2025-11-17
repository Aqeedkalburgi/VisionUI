'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Code, Award } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '10K+',
      label: 'Active Developers',
      description: 'Growing community daily'
    },
    {
      icon: Code,
      value: '1M+',
      label: 'Lines of Code',
      description: 'Clean and maintainable'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable infrastructure'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards',
      description: 'Industry recognition'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join the community of developers building amazing applications with our platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-blue-100 text-sm">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
        />
      </div>
    </section>
  )
}

export default Stats