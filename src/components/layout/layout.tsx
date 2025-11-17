'use client'

import { motion } from 'framer-motion'
import Header from './header'
import Footer from './footer'
import { Toaster } from '@/components/ui/toaster'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default Layout