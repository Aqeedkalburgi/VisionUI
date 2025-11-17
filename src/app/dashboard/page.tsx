'use client'

import Layout from '@/components/layout/layout'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  Users, 
  Code, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Settings,
  Download
} from 'lucide-react'

const DashboardPage = () => {
  const stats = [
    {
      title: 'Total Projects',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active Users',
      value: '1,429',
      change: '+23%',
      trend: 'up',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Performance',
      value: '98.2%',
      change: '-2%',
      trend: 'down',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'API Calls',
      value: '89.7K',
      change: '+45%',
      trend: 'up',
      icon: Activity,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const recentProjects = [
    {
      name: 'E-commerce Platform',
      status: 'active',
      lastUpdated: '2 hours ago',
      progress: 75
    },
    {
      name: 'Mobile App Dashboard',
      status: 'development',
      lastUpdated: '1 day ago',
      progress: 45
    },
    {
      name: 'Analytics System',
      status: 'completed',
      lastUpdated: '3 days ago',
      progress: 100
    },
    {
      name: 'Customer Portal',
      status: 'active',
      lastUpdated: '1 week ago',
      progress: 90
    }
  ]

  const activities = [
    {
      user: 'Sarah Chen',
      action: 'deployed new version',
      project: 'E-commerce Platform',
      time: '10 minutes ago'
    },
    {
      user: 'Marcus Johnson',
      action: 'updated configuration',
      project: 'Mobile App Dashboard',
      time: '1 hour ago'
    },
    {
      user: 'Emily Rodriguez',
      action: 'completed review',
      project: 'Analytics System',
      time: '3 hours ago'
    },
    {
      user: 'David Kim',
      action: 'pushed new code',
      project: 'Customer Portal',
      time: '5 hours ago'
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
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your projects.</p>
              </div>
              <div className="flex gap-3 mt-4 sm:mt-0">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`flex items-center text-sm font-medium ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.trend === 'up' ? (
                            <ArrowUpRight className="w-4 h-4 mr-1" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 mr-1" />
                          )}
                          {stat.change}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.value}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {stat.title}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Projects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Recent Projects
                    </CardTitle>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentProjects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          whileHover={{ x: 5 }}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg" />
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  {project.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {project.lastUpdated}
                                </p>
                              </div>
                            </div>
                            <Badge
                              variant={
                                project.status === 'active' ? 'default' :
                                project.status === 'development' ? 'secondary' :
                                'outline'
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {project.progress}% complete
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activities.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900">
                              <span className="font-medium">{activity.user}</span>
                              {' '}{activity.action}{' '}
                              <span className="font-medium">{activity.project}</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default DashboardPage