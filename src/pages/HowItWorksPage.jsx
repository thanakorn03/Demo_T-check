import { Link } from 'react-router-dom'
import { Upload, Zap, CheckCircle, Download, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Text',
      description: 'Paste your content or upload a document. We support various formats including plain text, Word, and PDF.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'AI Analysis',
      description: 'Our advanced AI engine analyzes your text for grammar, spelling, style, and clarity issues in real-time.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CheckCircle,
      title: 'Review Suggestions',
      description: 'Get detailed suggestions with explanations. Accept, reject, or customize each recommendation as you prefer.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Download,
      title: 'Export & Share',
      description: 'Download your polished content or share it directly. Your improved writing is ready to impress.',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card-dark rounded-full border border-gray-800 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Simple & Powerful</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            How{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GrammarAI
            </span>
            {' '}Works
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your writing in four simple steps. Our AI-powered platform makes 
            professional writing accessible to everyone.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-card-dark border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose GrammarAI?
                </h2>
                <p className="text-gray-400 mb-6">
                  Our AI doesn't just correct mistakes—it understands context, 
                  tone, and style to make your writing truly exceptional.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Real-time suggestions as you type</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Context-aware grammar checking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Style and tone recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Plagiarism detection included</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="bg-card-dark border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-lg">Lightning Fast</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Get instant feedback with our optimized AI engine
                  </p>
                </div>
                
                <div className="bg-card-dark border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-lg">Highly Accurate</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    99.8% accuracy rate in grammar detection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Writing?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of writers who trust GrammarAI for their content.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage
