'use client'

import Layout from '@/components/layout/layout'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Target, Lightbulb, Award } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower developers with cutting-edge tools and frameworks that accelerate innovation and simplify complex development challenges.'
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'A world where building amazing web applications is accessible, efficient, and enjoyable for developers of all skill levels.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fostering a collaborative environment where knowledge sharing and mutual growth drive the entire ecosystem forward.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality solutions with attention to detail, performance, and user experience.'
    }
  ]

  const milestones = [
    { year: '2020', achievement: 'Founded with a vision to simplify web development' },
    { year: '2021', achievement: 'Reached 1,000 active developers' },
    { year: '2022', achievement: 'Launched enterprise features' },
    { year: '2023', achievement: 'Expanded to 10,000+ developers globally' },
    { year: '2024', achievement: 'Introduced advanced development tools' }
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: '/api/placeholder/200/200',
      expertise: ['Product Strategy', 'Leadership']
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO',
      image: '/api/placeholder/200/200',
      expertise: ['Architecture', 'Performance']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '/api/placeholder/200/200',
      expertise: ['UI/UX', 'Design Systems']
    },
    {
      name: 'David Kim',
      role: 'Lead Engineer',
      image: '/api/placeholder/200/200',
      expertise: ['Frontend', 'React']
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}Code Value
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to revolutionize web development by providing powerful tools, 
                exceptional design, and unparalleled developer experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones in our growth story
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <Card className="p-6 border-0 shadow-lg">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          {milestone.year}
                        </Badge>
                        <p className="text-gray-700">{milestone.achievement}</p>
                      </div>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full mx-4" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The talented people behind Code Value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage