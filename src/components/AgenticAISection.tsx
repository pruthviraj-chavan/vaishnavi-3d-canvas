
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Bot, Brain, Zap, Network, ArrowRight } from 'lucide-react';

const AgenticAISection = () => {
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

  const aiFeatures = [
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Building AI agents that can understand context, make decisions, and execute complex workflows autonomously.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Developing sophisticated neural network architectures for pattern recognition and predictive analytics.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Network,
      title: "Multi-Agent Systems",
      description: "Creating collaborative AI ecosystems where multiple agents work together to solve complex problems.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Implementing high-performance AI systems capable of real-time decision making and response generation.",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 via-tech-purple/3 to-tech-teal/5 dark:from-tech-blue/3 dark:via-tech-purple/2 dark:to-tech-teal/3"></div>
      
      {/* Floating AI Nodes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full animate-float opacity-20 flex items-center justify-center">
        <Bot className="w-8 h-8 text-white" />
      </div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-tech-purple to-tech-teal rounded-full animate-float opacity-15 flex items-center justify-center" style={{ animationDelay: '2s' }}>
        <Brain className="w-10 h-10 text-white" />
      </div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-tech-teal to-tech-cyan rounded-full animate-float opacity-25 flex items-center justify-center" style={{ animationDelay: '4s' }}>
        <Network className="w-6 h-6 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-tech-blue animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient">
                Agentic AI Expertise
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specializing in autonomous AI systems that can think, learn, and act independently 
              to solve complex real-world problems
            </p>
          </motion.div>

          {/* AI Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="glass dark:glass-dark h-full hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center group-hover:animate-float`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* AI Workflow Visualization */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="glass dark:glass-dark p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gradient mb-2">AI Agent Workflow</h3>
                <p className="text-muted-foreground">How my AI systems process and respond to complex scenarios</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                {[
                  { step: "Data Input", icon: Network, desc: "Collect & Process" },
                  { step: "Analysis", icon: Brain, desc: "Pattern Recognition" },
                  { step: "Decision", icon: Zap, desc: "AI Reasoning" },
                  { step: "Action", icon: Bot, desc: "Autonomous Response" }
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center space-y-3 group">
                      <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center group-hover:animate-float">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold">{item.step}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    {index < 3 && (
                      <ArrowRight className="w-6 h-6 text-tech-blue hidden md:block animate-pulse" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticAISection;
