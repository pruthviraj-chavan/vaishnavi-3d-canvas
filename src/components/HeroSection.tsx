
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Download, Sparkles, Code2, Database, User } from 'lucide-react';
import AgenticAISection from './AgenticAISection';
import DataAnalystSection from './DataAnalystSection';
import JourneySection from './JourneySection';

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
        
        {/* Enhanced Floating Elements - Hidden on mobile for better performance */}
        <div className="hidden md:block absolute top-20 left-10 w-16 lg:w-24 h-16 lg:h-24 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full animate-float opacity-30 flex items-center justify-center">
          <Code2 className="w-8 lg:w-12 h-8 lg:h-12 text-white" />
        </div>
        <div className="hidden md:block absolute bottom-20 right-10 w-20 lg:w-32 h-20 lg:h-32 bg-gradient-to-r from-tech-purple to-tech-teal rounded-full animate-float opacity-25 flex items-center justify-center" style={{ animationDelay: '2s' }}>
          <Database className="w-10 lg:w-16 h-10 lg:h-16 text-white" />
        </div>
        <div className="hidden lg:block absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-tech-teal to-tech-cyan rounded-full animate-float opacity-35 flex items-center justify-center" style={{ animationDelay: '4s' }}>
          <Sparkles className="w-8 h-8 text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                <span className="block text-gradient mb-2 lg:mb-4">Vaishnavi</span>
                <span className="block text-foreground">Kapse</span>
              </motion.h1>
              
              <motion.div 
                className="text-lg sm:text-xl lg:text-2xl font-medium space-y-2"
                variants={itemVariants}
              >
                <span className="block text-muted-foreground">Technical Support Engineer</span>
                <span className="block text-tech-blue font-semibold">@ Tech Mahindra</span>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                  <span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-tech-blue to-tech-purple text-white rounded-full text-sm font-medium">
                    Agentic AI Specialist
                  </span>
                  <span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-tech-purple to-tech-teal text-white rounded-full text-sm font-medium">
                    Data Analyst
                  </span>
                </div>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed"
              >
                <span className="text-tech-blue font-semibold">B.Tech Computer Science Engineering</span> graduate from 
                <span className="text-tech-purple font-semibold"> D.Y. Patil Salokhe Nagar, Kolhapur</span>. 
                Passionate about <span className="text-tech-teal font-semibold">Agentic AI</span>, 
                <span className="text-tech-cyan font-semibold"> Data Analysis</span>, and creating innovative 
                <span className="text-tech-blue font-semibold"> SaaS solutions</span>.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center"
              >
                <Link to="/projects" className="w-full sm:w-auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-teal text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg animate-glow"
                    >
                      <Sparkles className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                      View Projects
                    </Button>
                  </motion.div>
                </Link>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'Vaishnavi_Kapse_Resume.pdf';
                      link.click();
                    }}
                  >
                    <Download className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Animated Photo */}
            <motion.div 
              variants={itemVariants} 
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated Background Circles */}
                <motion.div
                  className="absolute inset-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.div
                  className="absolute inset-4 w-56 sm:w-72 lg:w-88 h-56 sm:h-72 lg:h-88 bg-gradient-to-br from-tech-purple/20 to-tech-teal/20 rounded-full"
                  animate={{ 
                    scale: [1.1, 1, 1.1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Photo Container */}
                <motion.div
                  className="relative w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full flex items-center justify-center shadow-2xl"
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {/* Placeholder for photo - can be replaced with actual image */}
                  <div className="w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-tech-purple to-tech-teal rounded-full flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold shadow-inner">
                    <User className="w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40" />
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-tech-cyan to-tech-blue rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity 
                    }}
                  >
                    <Code2 className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-tech-teal to-tech-purple rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      rotate: [360, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity 
                    }}
                  >
                    <Database className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator - Hidden on mobile */}
          <motion.div 
            variants={itemVariants}
            className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 lg:w-8 h-10 lg:h-12 border-2 border-tech-blue rounded-full flex justify-center cursor-pointer hover:border-tech-purple transition-colors"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 lg:w-1.5 h-3 lg:h-4 bg-gradient-to-b from-tech-blue to-tech-purple rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Add the journey section */}
      <JourneySection />
      
      {/* Add the new sections */}
      <AgenticAISection />
      <DataAnalystSection />
    </>
  );
};

export default HeroSection;
