import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">GrammarAI</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
              About Us
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="px-5 py-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
