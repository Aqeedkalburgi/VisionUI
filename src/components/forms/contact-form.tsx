'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

const ContactForm = () => {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", "a5f0841b-dc29-4aef-9da3-de5094ba7a99")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()
      
      if (data.success) {
        setResult("success")
        // Clear form
        form.reset()
      } else {
        setResult("error")
      }
    } catch (error) {
      setResult("error")
    } finally {
      setIsSubmitting(false)
      // Clear result after 5 seconds
      setTimeout(() => setResult(""), 5000)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <Input
            id="subject"
            type="text"
            name="subject"
            required
            placeholder="How can we help you?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us more about your project or question..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Result Message */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg flex items-center gap-3 ${
              result === "success" 
                ? "bg-green-50 text-green-800 border border-green-200" 
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {result === "success" ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! Your message has been sent successfully.</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5" />
                <span>Sorry, there was an error sending your message. Please try again.</span>
              </>
            )}
          </motion.div>
        )}

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center"
        >
          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </motion.div>
      </motion.form>
    </div>
  )
}

export default ContactForm