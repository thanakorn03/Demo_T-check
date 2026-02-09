import { Link } from 'react-router-dom'
import { Sparkles, Zap, Shield, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card-dark rounded-full border border-gray-800 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">AI-Powered Grammar Correction v3.0</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Write with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Elevate your writing with our advanced AI assistant that catches errors, 
            suggests improvements, and helps you communicate more effectively.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="/signup"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Start Communicating</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="#features"
              className="px-8 py-4 border border-gray-700 text-white rounded-lg font-semibold hover:bg-card-dark transition-colors duration-200"
            >
              Learn How It Works
            </a>
          </div>

          {/* Features Grid */}
          <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {/* Feature Card 1 */}
            <div className="bg-card-dark border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Correction</h3>
              <p className="text-gray-400">
                Get real-time grammar and spelling corrections as you type, 
                with smart suggestions powered by advanced AI.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-card-dark border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Style Suggestions</h3>
              <p className="text-gray-400">
                Enhance your writing style with contextual recommendations 
                that make your content more engaging and professional.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-card-dark border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-gray-400">
                Your data is encrypted and secure. We never share your content 
                with third parties or use it for training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
