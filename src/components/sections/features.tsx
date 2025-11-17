'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Globe, Code, Database, Cloud } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized for speed with lazy loading, code splitting, and modern bundling techniques.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security features with authentication, authorization, and data protection.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy worldwide with CDN integration and edge computing capabilities.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Modern Stack',
      description: 'Latest React patterns, TypeScript, and cutting-edge development tools.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Database,
      title: 'Smart Data',
      description: 'Efficient data management with caching, optimization, and real-time updates.',
      color: 'from-red-400 to-rose-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Designed for the cloud with containerization and microservices architecture.',
      color: 'from-indigo-400 to-blue-500'
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
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features that help you build, deploy, and scale amazing applications with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <span>And much more...</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features