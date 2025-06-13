
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Database, Bot, BarChart3, Code } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const projects = [
    {
      title: "Agentic AI Assistant Platform",
      description: "An intelligent AI-powered assistant platform that uses advanced LLM models to provide contextual responses and automate complex workflows. Features include natural language processing, task automation, and intelligent decision-making.",
      technologies: ["Python", "LangChain", "OpenAI API", "FastAPI", "React", "TypeScript"],
      category: "Agentic AI",
      color: "from-blue-500 to-purple-600",
      icon: Bot,
      status: "Live",
      features: ["Natural Language Processing", "Task Automation", "Context-Aware Responses", "Multi-Modal Interactions"]
    },
    {
      title: "Data Analytics Dashboard",
      description: "Comprehensive data visualization platform for business intelligence. Processes large datasets, generates insights, and creates interactive dashboards for data-driven decision making.",
      technologies: ["Python", "Pandas", "Plotly", "Streamlit", "SQL", "MongoDB"],
      category: "Data Analysis",
      color: "from-green-500 to-teal-600",
      icon: BarChart3,
      status: "Live",
      features: ["Real-time Analytics", "Interactive Visualizations", "Predictive Modeling", "Export Reports"]
    },
    {
      title: "SaaS Customer Support Platform",
      description: "Modern customer support platform with ticket management, live chat, and automated responses. Built during my role at Tech Mahindra to streamline technical support operations.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
      category: "SaaS Development",
      color: "from-purple-500 to-pink-600",
      icon: Code,
      status: "Production",
      features: ["Ticket Management", "Live Chat", "Automated Responses", "Analytics Dashboard"]
    },
    {
      title: "Database Management System",
      description: "Enterprise-level database management system with advanced querying capabilities, data visualization, and performance optimization tools.",
      technologies: ["SQL", "PostgreSQL", "Python", "Django", "Redis", "Docker"],
      category: "Database",
      color: "from-orange-500 to-red-600",
      icon: Database,
      status: "Completed",
      features: ["Query Optimization", "Data Visualization", "Performance Monitoring", "Backup & Recovery"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-gradient mb-4">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical expertise in Agentic AI, Data Analysis, and SaaS Development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="glass dark:glass-dark h-full hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center group-hover:animate-float`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                        {project.status}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <p className="text-sm text-tech-blue font-medium">{project.category}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-tech-blue rounded-full"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-muted rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
