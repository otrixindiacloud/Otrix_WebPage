"use client";

import { Button } from "@/components/ui/button";
import { HoverLink } from "@/components/ui/hover-link";
import { motion } from "framer-motion";

export default function HoverDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hover Navigation Demo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Hover over the buttons and links below to see automatic navigation in action!
          </p>
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-8">
            <p className="text-yellow-800 font-medium">
              💡 <strong>How it works:</strong> Hover over any button or link for 0.5-0.8 seconds 
              and it will automatically navigate to the page without clicking!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Button Examples */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Button Examples</h2>
            <div className="space-y-4">
              <Button
                href="/about"
                hoverNavigation={true}
                hoverDelay={500}
                className="w-full"
              >
                About Us (500ms delay)
              </Button>
              
              <Button
                href="/services"
                hoverNavigation={true}
                hoverDelay={800}
                variant="outline"
                className="w-full"
              >
                Services (800ms delay)
              </Button>
              
              <Button
                href="/contact"
                hoverNavigation={true}
                hoverDelay={1000}
                variant="secondary"
                className="w-full"
              >
                Contact (1000ms delay)
              </Button>
            </div>
          </motion.div>

          {/* Link Examples */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Link Examples</h2>
            <div className="space-y-4">
              <HoverLink
                href="/industries"
                hoverDelay={600}
                className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 font-medium transition-colors"
              >
                Industries (600ms delay)
              </HoverLink>
              
              <HoverLink
                href="/careers"
                hoverDelay={700}
                className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg text-green-700 font-medium transition-colors"
              >
                Careers (700ms delay)
              </HoverLink>
              
              <HoverLink
                href="/blog"
                hoverDelay={500}
                className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-700 font-medium transition-colors"
              >
                Blog (500ms delay)
              </HoverLink>
            </div>
          </motion.div>
        </div>

        {/* Navigation Test */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Navigation Test</h2>
          <p className="text-gray-600 mb-6">
            Try hovering over these navigation-style links:
          </p>
          <div className="flex flex-wrap gap-4">
            <HoverLink
              href="/"
              hoverDelay={600}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
            >
              Home
            </HoverLink>
            <HoverLink
              href="/about"
              hoverDelay={600}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
            >
              About
            </HoverLink>
            <HoverLink
              href="/services"
              hoverDelay={600}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
            >
              Services
            </HoverLink>
            <HoverLink
              href="/contact"
              hoverDelay={600}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
            >
              Contact
            </HoverLink>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6"
        >
          <h3 className="text-lg font-bold text-blue-900 mb-3">Instructions:</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• Hover over any button or link above</li>
            <li>• Wait for the specified delay time (shown in parentheses)</li>
            <li>• The page will automatically navigate without clicking</li>
            <li>• Move your cursor away to cancel the navigation</li>
            <li>• You can still click normally for instant navigation</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
