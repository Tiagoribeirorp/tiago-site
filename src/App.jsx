import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Github, Linkedin, Mail, Code2, Database, Bot, Workflow, ExternalLink, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const skills = {
    languages: ['Python', 'JavaScript', 'SQL','PostgreSQL'],
    frameworks: ['Django', 'FastAPI', 'React', 'Node.js'],
    automation: ['Zapier', 'Make', 'N8N', 'RPA'],
    specialties: ['Data Analysis', 'API Development', 'AI Agents', 'Process Automation']
  }

  const projects = [
    {
      name: 'automated_dashboard',
      title: 'Automated Data Dashboard',
      description: 'Real-time analytics dashboard with automated data pipelines and AI-powered insights for business intelligence.',
      role: 'Full Stack Developer, Data Analyst',
      tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'N8N'],
      icon: Database
    },
    {
      name: 'ai_agent_system',
      title: 'AI Agent System',
      description: 'Intelligent automation system using AI agents to handle customer inquiries and process workflows autonomously.',
      role: 'AI Developer, Automation Specialist',
      tech: ['Python', 'OpenAI API', 'LangChain', 'FastAPI', 'React'],
      icon: Bot
    },
    {
      name: 'rpa_workflow',
      title: 'RPA Workflow Engine',
      description: 'Robust RPA solution for automating repetitive business processes, reducing manual work by 80%.',
      role: 'RPA Developer, Process Analyst',
      tech: ['Python', 'Selenium', 'Zapier', 'Make', 'Django'],
      icon: Workflow
    },
    {
      name: 'api_integration',
      title: 'Multi-Platform API Integration',
      description: 'Seamless integration platform connecting multiple services and APIs for unified data management.',
      role: 'Backend Developer, Integration Specialist',
      tech: ['Python', 'FastAPI', 'Django', 'REST', 'GraphQL'],
      icon: Code2
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-slate-100">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg border-b border-purple-500/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-2 text-xl font-mono font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="text-purple-400" />
            <span className="text-purple-400">&lt;</span>
            <span>developer</span>
            <span className="text-purple-400">/&gt;</span>
          </motion.div>
          
          <div className="hidden md:flex gap-6 font-mono text-sm">
            {['profile', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-purple-400 transition-colors relative group"
              >
                <span className="text-purple-400">.</span>{section}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 text-purple-400 font-mono text-sm">
                <Code2 size={20} />
                <span>developer_profile</span>
              </div>
              
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6 flex items-center justify-center text-4xl font-bold shadow-lg shadow-purple-500/50">
                <Code2 size={64} className="text-white" />
              </div>
              
              <div className="text-center space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-purple-400 font-mono">
                  <span>&lt;</span>
                  <span>name</span>
                  <span>&gt;</span>
                </div>
                <h2 className="text-2xl font-bold">Tiago Ribeiro</h2>
                <div className="flex items-center justify-center gap-2 text-sm text-purple-400 font-mono">
                  <span>&lt;/</span>
                  <span>name</span>
                  <span>&gt;</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-mono">#data</span>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-mono">#automation</span>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-mono">#ai</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="font-mono text-purple-400 text-sm">
              <span className="text-green-400">$</span> ./introduce.sh
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-purple-400">Hello</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                World!
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Meu nome é <span className="text-purple-400 font-semibold">Tiago Ribeiro</span> e sou{' '}
              <span className="text-purple-400 font-semibold">Analista de Dados</span> e{' '}
              <span className="text-purple-400 font-semibold">Desenvolvedor</span> 💻
              <br />
              Especializado em <span className="text-purple-400 font-semibold">Automações</span>,{' '}
              <span className="text-purple-400 font-semibold">RPA</span> e{' '}
              <span className="text-purple-400 font-semibold">Agentes de IA</span> 🤖
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('profile')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-mono group"
              >
                <span className="text-green-400 mr-2">$</span>
                PROFILE
                <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={16} />
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 font-mono"
              >
                <span className="text-yellow-400 mr-2">$</span>
                PROJECTS
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-pink-500 text-pink-400 hover:bg-pink-500/10 font-mono"
              >
                <span className="text-pink-400 mr-2">$</span>
                CONTACT
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-purple-400" size={32} />
        </motion.div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-mono">
              <span className="text-purple-400">&lt;</span>
              profile
              <span className="text-purple-400">&gt;</span>
            </h2>
          </motion.div>

          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 font-mono text-purple-400">
              <span className="text-slate-400">.</span>about_me
            </h3>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 space-y-4 text-slate-300 leading-relaxed">
              <p>
                Sou um profissional apaixonado por <span className="text-purple-400 font-semibold">tecnologia</span> e{' '}
                <span className="text-purple-400 font-semibold">dados</span>, com foco em criar soluções que{' '}
                <span className="text-purple-400 font-semibold">automatizam processos</span> e geram{' '}
                <span className="text-purple-400 font-semibold">insights valiosos</span> para negócios.
              </p>
              <p>
                Ao longo da minha carreira, desenvolvi expertise em{' '}
                <span className="text-purple-400 font-semibold">análise de dados</span>,{' '}
                <span className="text-purple-400 font-semibold">desenvolvimento de APIs e sites</span>,{' '}
                <span className="text-purple-400 font-semibold">automação RPA</span> e criação de{' '}
                <span className="text-purple-400 font-semibold">agentes de IA</span> que transformam a forma como as empresas operam.
              </p>
              <p>
                Minha missão é <span className="text-purple-400 font-semibold">combinar dados, código e inteligência artificial</span> para criar soluções inovadoras que impulsionam a eficiência e o crescimento.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 font-mono text-purple-400">
              <span className="text-slate-400">.</span>skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
                >
                  <h4 className="text-lg font-bold mb-4 text-purple-400 font-mono capitalize">
                    {category.replace('_', ' ')}:
                  </h4>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-slate-300">
                        <span className="text-green-400">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-mono">
              <span className="text-purple-400">&lt;/</span>
              profile
              <span className="text-purple-400">&gt;</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-mono">
              <span className="text-purple-400">&lt;</span>
              projects
              <span className="text-purple-400">&gt;</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 space-y-4 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                        <Icon className="text-purple-400" size={24} />
                      </div>
                      <h4 className="text-lg font-bold font-mono text-purple-400">
                        <span className="text-slate-400">.</span>{project.name}
                      </h4>
                    </div>
                    <ExternalLink className="text-slate-400 group-hover:text-purple-400 transition-colors" size={20} />
                  </div>

                  <h5 className="text-xl font-semibold">{project.title}</h5>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="pt-2">
                    <p className="text-sm text-purple-400 font-semibold mb-2">{project.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs font-mono text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-purple-400 hover:bg-purple-500/10 font-mono text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    Repository
                  </Button>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-mono">
              <span className="text-purple-400">&lt;/</span>
              projects
              <span className="text-purple-400">&gt;</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-mono">
              <span className="text-purple-400">&lt;</span>
              contact
              <span className="text-purple-400">&gt;</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 font-mono text-purple-400">
                <span className="text-slate-400">.</span>social_links
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Github, label: 'GitHub', value: 'github.com/Tiagoribeirorp', color: 'purple',href: 'https://github.com/Tiagoribeirorp' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/analista-tiago-ribeiro/', color: 'blue', href: 'https://linkedin.com/in/analista-tiago-ribeiro/' },
                  { icon: Mail, label: 'Email', value: 'tiagoribeirodev@gmail.com', color: 'pink',href: 'mailto:tiagoribeirodev@gmail.com'  }
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group"
                    >
                      <div className={`p-3 bg-${item.color}-500/20 rounded-lg group-hover:bg-${item.color}-500/30 transition-colors`}>
                        <Icon className={`text-${item.color}-400`} size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        <p className="text-sm text-slate-400 font-mono">{item.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 font-mono text-purple-400">
                <span className="text-slate-400">.</span>email
              </h3>
              <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 h-full flex flex-col justify-center">
                <p className="text-sm text-slate-400 mb-4 font-mono">$ cat contact.txt</p>
                <p className="text-2xl font-bold text-purple-400 mb-6 break-all">
                  seu.email@exemplo.com
                </p>
                <Button onClick={() => window.location.href = 'mailto:seu.email@exemplo.com'} className="bg-purple-600 hover:bg-purple-700 text-white font-mono w-full">
                  <Mail size={20} className="mr-2" />
                  Enviar Email
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-mono">
              <span className="text-purple-400">&lt;/</span>
              contact
              <span className="text-purple-400">&gt;</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20 bg-slate-950/80">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 font-mono text-sm">
            <span className="text-green-400">$</span> Made with{' '}
            <span className="text-pink-400">♥</span> by{' '}
            <span className="text-purple-400">Tiago "TygaZ" Ribeiro</span>
          </p>
          <p className="text-slate-500 text-xs mt-2 font-mono">
            © 2025 • All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

