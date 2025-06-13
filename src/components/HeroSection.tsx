
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Download, Sparkles, Code2, Database } from 'lucide-react';
import AgenticAISection from './AgenticAISection';
import DataAnalystSection from './DataAnalystSection';

const HeroSection = () => {
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

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 via-tech-purple/10 to-tech-teal/15 dark:from-tech-blue/10 dark:via-tech-purple/5 dark:to-tech-teal/8"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full animate-float opacity-30 flex items-center justify-center">
          <Code2 className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-tech-purple to-tech-teal rounded-full animate-float opacity-25 flex items-center justify-center" style={{ animationDelay: '2s' }}>
          <Database className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-tech-teal to-tech-cyan rounded-full animate-float opacity-35 flex items-center justify-center" style={{ animationDelay: '4s' }}>
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-tech-cyan to-tech-blue rounded-full animate-float opacity-20 flex items-center justify-center" style={{ animationDelay: '6s' }}>
          <Code2 className="w-10 h-10 text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold font-poppins"
                whileHover={{ scale: 1.02 }}
              >
                <span className="block text-gradient mb-4">Vaishnavi</span>
                <span className="block text-foreground">Kapse</span>
              </motion.h1>
              
              <motion.div 
                className="text-2xl md:text-3xl font-medium space-y-2"
                variants={itemVariants}
              >
                <span className="block text-muted-foreground">Technical Support Engineer</span>
                <span className="block text-tech-blue font-semibold">@ Tech Mahindra</span>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-tech-blue to-tech-purple text-white rounded-full text-sm font-medium">
                    Agentic AI Specialist
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-tech-purple to-tech-teal text-white rounded-full text-sm font-medium">
                    Data Analyst
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              <span className="text-tech-blue font-semibold">B.Tech Computer Science Engineering</span> graduate from 
              <span className="text-tech-purple font-semibold"> D.Y. Patil Salokhe Nagar, Kolhapur</span>. 
              Passionate about <span className="text-tech-teal font-semibold">Agentic AI</span>, 
              <span className="text-tech-cyan font-semibold"> Data Analysis</span>, and creating innovative 
              <span className="text-tech-blue font-semibold"> SaaS solutions</span>.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/projects">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-teal text-white px-10 py-4 rounded-full font-semibold text-lg animate-glow"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    View Projects
                  </Button>
                </motion.div>
              </Link>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-10 py-4 rounded-full font-semibold text-lg"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Vaishnavi_Kapse_Resume.pdf';
                    link.click();
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div 
              variants={itemVariants}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-12 border-2 border-tech-blue rounded-full flex justify-center cursor-pointer hover:border-tech-purple transition-colors"
              >
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-4 bg-gradient-to-b from-tech-blue to-tech-purple rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Add the new sections */}
      <AgenticAISection />
      <DataAnalystSection />
    </>
  );
};

export default HeroSection;
