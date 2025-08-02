import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Brain, Zap, CheckCircle, Globe, Users, Target, Clock, Shield, Rocket, Award, ChevronRight, Star, TrendingUp, Layers, Database, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const navLinks = [
    { name: "Services", sectionId: "services" },
    { name: "Features", sectionId: "features" },
    { name: "Portfolio", sectionId: "portfolio" },
    { name: "Contact", sectionId: "contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Aurora Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="I" className="w-6 h-7"/>
              </div>
              <span className="text-fluid-logo font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Inventurs
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button 
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)} 
                  className="text-slate-300 hover:text-white transition-colors text-lg"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="z-50 w-8 h-8 flex flex-col justify-around"
                aria-label="Toggle menu"
              >
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-xl transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <button 
              key={link.sectionId}
              onClick={() => {
                scrollToSection(link.sectionId);
                setIsMenuOpen(false);
              }} 
              className="text-slate-100 text-3xl font-semibold"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => {
              scrollToSection('contact');
              setIsMenuOpen(false);
            }} 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-2xl font-semibold mt-8"
          >
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Hero Section - Enhanced */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2 text-lg">
                Digital Innovation Partners
              </Badge>
              <h1 className="text-[3.25rem] lg:text-[4rem] font-bold leading-tight">
                Where Vision Meets{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Execution
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                We are a digital innovation partner, building high-end software, scalable platforms, 
                and AI-driven solutions that propel ambitious businesses into the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 group"
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-full text-xl font-semibold"
                >
                  View Case Studies
                </Button>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center"><div className="text-4xl font-bold text-blue-400">100+</div><div className="text-slate-400 text-lg">Projects Delivered</div></div>
                <div className="text-center"><div className="text-4xl font-bold text-teal-400">50+</div><div className="text-slate-400 text-lg">Happy Clients</div></div>
                <div className="text-center"><div className="text-4xl font-bold text-purple-400">5+</div><div className="text-slate-400 text-lg">Years Experience</div></div>
              </div>
            </div>
            
           {/* THIS IS THE NEW, REPLACED ENQUIRY FORM */}
           {/* THIS IS THE NEW, REPLACED ENQUIRY FORM - REBUILT TO MATCH IMAGE */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              
              {/* 
                LAYER 1: THE BORDER PROVIDER
                This outer div's only job is to create the glowing border effect using
                a diagonal gradient and padding.
              */}
              <div className="relative rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-teal-400 p-[1.5px]">
                
                {/* 
                  LAYER 2: THE FORM CARD
                  This inner div has its OWN subtle vertical gradient for the form's body.
                  It sits inside the border provider's padding.
                */}
                <div className="relative w-full h-full rounded-[22px] bg-gradient-to-b from-indigo-950 to-slate-950 p-8">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2 text-center tracking-tight">
                      Start Your{" "}
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                        Project
                      </span>
                    </h3>
                    <p className="text-slate-400 mb-6 text-center text-sm">
                      Tell us about your vision. We'll reply within 24 hours.
                    </p>
                    <form className="space-y-5">
                      {/* Simplified Full Name Field */}
                      <div>
                        <label htmlFor="hero-name" className="sr-only">Full Name</label>
                        <input 
                          type="text" 
                          id="hero-name"
                          placeholder="Full Name" 
                          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                        />
                      </div>
                      
                      {/* Simplified Email Field */}
                      <div>
                        <label htmlFor="hero-email" className="sr-only">Email Address</label>
                        <input 
                          type="email" 
                          id="hero-email"
                          placeholder="Email Address" 
                          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                        />
                      </div>
                      
                      {/* Simplified Select Field */}
                      <Select>
                        <SelectTrigger className="w-full px-4 py-3 justify-between rounded-lg bg-slate-800/50 text-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300">
                          <SelectValue placeholder="Select a Service..." />
                        </SelectTrigger>
                        <SelectContent 
                          className="bg-slate-900/80 backdrop-blur-lg border-slate-700 text-slate-100 rounded-lg shadow-lg"
                        >
                          <SelectItem value="web-development" className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800">Web Development</SelectItem>
                          <SelectItem value="mobile-development" className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800">Mobile Development</SelectItem>
                          <SelectItem value="custom-software" className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800">Custom Software Development</SelectItem>
                          <SelectItem value="erp" className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800">ERP Solutions</SelectItem>
                          <SelectItem value="crm" className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800">CRM Systems</SelectItem>
                          <SelectItem value="lms" className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800">LMS Platforms</SelectItem>
                          <SelectItem value="cms" className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800">CMS Integration</SelectItem>
                        </SelectContent>
                      </Select>

                      {/* Simplified Textarea Field */}
                      <div>
                        <label htmlFor="hero-message" className="sr-only">Your Message</label>
                        <textarea 
                          id="hero-message"
                          placeholder="Briefly describe your project or inquiry..." 
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none"
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                      >
                        Send Enquiry
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
      </section>

      {/* Services Section - Enhanced */}
      <section id="services" className="py-24 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2 text-lg mb-6">
              Core Services
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Capabilities That Drive{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We deliver a complete spectrum of services designed to address your most complex challenges 
              and create lasting value for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Enterprise Software Development",
                description: "Bespoke web and mobile applications engineered for performance, scalability, and security at enterprise level.",
                features: ["Custom Web Applications", "Mobile App Development", "API Development", "Cloud Architecture"]
              },
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Leveraging cutting-edge AI and data analytics to unlock insights and automate complex business processes.",
                features: ["Machine Learning Models", "Data Analytics", "Process Automation", "Predictive Analytics"]
              },
              {
                icon: Zap,
                title: "Digital Transformation",
                description: "Strategic consulting and implementation to modernize legacy systems and drive digital-first growth.",
                features: ["Legacy Modernization", "Cloud Migration", "DevOps Implementation", "Strategic Consulting"]
              },
              {
                icon: Globe,
                title: "Platform Engineering",
                description: "Building scalable, robust platforms that serve as the foundation for your digital ecosystem.",
                features: ["Microservices Architecture", "Container Orchestration", "Infrastructure as Code", "Platform Optimization"]
              },
              {
                icon: Database,
                title: "Data Engineering",
                description: "Comprehensive data solutions from collection to visualization, enabling data-driven decision making.",
                features: ["Data Pipeline Design", "Real-time Analytics", "Data Warehousing", "Business Intelligence"]
              },
              {
                icon: Shield,
                title: "Cybersecurity Solutions",
                description: "Comprehensive security frameworks to protect your digital assets and ensure compliance.",
                features: ["Security Audits", "Compliance Framework", "Threat Detection", "Risk Assessment"]
              }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-400">
                        <CheckCircle className="h-4 w-4 text-teal-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Powered by{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Modern Technology
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes",
              "TensorFlow", "MongoDB", "PostgreSQL", "Redis", "GraphQL", "TypeScript"
            ].map((tech, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-center group hover:scale-105">
                <div className="text-lg font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section id="features" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&crop=center" 
                alt="Advanced Technology and Innovation"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 px-4 py-2 text-lg">
                The Inventurs Advantage
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                A Partnership Built on{" "}
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Trust & Technology
                </span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Strategic Insight",
                    description: "We go beyond code, aligning technology with your business objectives to ensure meaningful impact and measurable results."
                  },
                  {
                    icon: Award,
                    title: "Uncompromising Quality",
                    description: "Our commitment to excellence in design, engineering, and project management is absolute, delivering solutions that exceed expectations."
                  },
                  {
                    icon: Users,
                    title: "Transparent Collaboration",
                    description: "We believe in a fully transparent process, providing clear communication, regular updates, and agile development practices."
                  },
                  {
                    icon: Clock,
                    title: "Rapid Delivery",
                    description: "Our proven methodologies and experienced team ensure faster time-to-market without compromising on quality or security."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-teal-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Success{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore how we've helped businesses transform their digital presence and achieve remarkable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform Revolution",
                category: "Retail Technology",
                description: "Transformed a traditional retail business with a modern e-commerce platform, increasing sales by 300%",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                metrics: ["300% Sales Increase", "50% Cost Reduction", "99.9% Uptime"]
              },
              {
                title: "AI-Powered Analytics Dashboard",
                category: "Data Science",
                description: "Built an intelligent analytics platform that processes millions of data points in real-time",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                metrics: ["1M+ Data Points", "Real-time Processing", "40% Faster Insights"]
              },
              {
                title: "Healthcare Management System",
                category: "Healthcare Tech",
                description: "Developed a comprehensive healthcare platform improving patient care and operational efficiency",
                image: "/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg",
                metrics: ["10K+ Patients", "60% Time Saved", "HIPAA Compliant"]
              }
            ].map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <Star className="h-3 w-3 text-yellow-400 mr-2" />
                        <span className="text-slate-400">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section id="contact" className="py-24 px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Ready to Build the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Future?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Let's discuss how our expertise can elevate your business. Reach out for a complimentary 
            consultation with our innovation team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 group"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-10 py-4 rounded-full text-xl font-semibold"
            >
              Schedule a Call
            </Button>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-slate-400">info@inventurs.in</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-slate-400">+91-9425758368</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-400">Indore, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="py-16 px-6 lg:px-8 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl"><img src="/logo.png" alt="I" className="w-6 h-7"/></span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Inventurs
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-6 max-w-md">
                Digital innovation for ambitious brands. We transform ideas into powerful digital experiences.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons can be added here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Company</h4>
              <div className="space-y-4">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg">About Us</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg">Careers</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg">Blog</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg">Press</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
              <div className="space-y-4">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg">Enterprise Software</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg">AI & Data Science</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg">Digital Transformation</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg">Consulting</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-lg">© 2025 Inventurs. All Rights Reserved. Built with precision and passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;