import { Link } from 'react-router-dom'
import { Target, Users, Heart, Award, Sparkles, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'

const AboutUsPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower every writer with AI-driven tools that make professional writing accessible, accurate, and effortless.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'We believe in privacy, accuracy, and innovation. Your data is secure, and our AI is continuously improving.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Our Vision',
      description: 'To become the world\'s most trusted AI writing assistant, helping millions communicate with confidence.',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'SJ',
      bio: 'Former linguistics professor with 15+ years in NLP research.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'MC',
      bio: 'AI engineer who led teams at major tech companies.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'ER',
      bio: 'Product designer passionate about user experience.',
    },
    {
      name: 'David Kim',
      role: 'Lead AI Researcher',
      image: 'DK',
      bio: 'PhD in Machine Learning with 50+ published papers.',
    },
  ]

  const stats = [
    { number: '2M+', label: 'Active Users' },
    { number: '50M+', label: 'Documents Checked' },
    { number: '99.8%', label: 'Accuracy Rate' },
    { number: '150+', label: 'Countries' },
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card-dark rounded-full border border-gray-800 mb-8">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Meet the Team</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GrammarAI
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We're on a mission to help everyone write better. Our AI-powered platform 
            combines cutting-edge technology with deep linguistic expertise.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card-dark border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card-dark border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A diverse group of linguists, engineers, and designers united by a passion 
            for language and technology.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-card-dark border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 group text-center"
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  {member.image}
                </div>
                
                {/* Info */}
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                GrammarAI was born from a simple observation: writing is hard, and everyone 
                deserves access to tools that make it easier. Our founder, Sarah Johnson, 
                spent years teaching linguistics and saw firsthand how students struggled 
                with grammar and style.
              </p>
              
              <p>
                In 2021, she assembled a team of AI researchers, linguists, and engineers 
                to build something different—not just a spell checker, but an intelligent 
                writing companion that understands context, tone, and nuance.
              </p>
              
              <p>
                Today, GrammarAI serves over 2 million writers worldwide, from students 
                to professionals, helping them communicate with confidence. But we're 
                just getting started. Our vision is to make professional-grade writing 
                assistance accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-400 mb-8">
            Be part of a community that values clear, confident communication.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            <span>Start Writing Better</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
