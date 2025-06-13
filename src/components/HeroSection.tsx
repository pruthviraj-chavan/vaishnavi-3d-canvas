
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 via-tech-purple/5 to-tech-teal/10 dark:from-tech-blue/5 dark:via-tech-purple/3 dark:to-tech-teal/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-tech-purple to-tech-teal rounded-full animate-float opacity-15" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-tech-teal to-tech-cyan rounded-full animate-float opacity-25" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-poppins"
              whileHover={{ scale: 1.02 }}
            >
              <span className="block text-gradient mb-2">Vaishnavi</span>
              <span className="block text-foreground">Kapse</span>
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl font-medium text-muted-foreground"
              variants={itemVariants}
            >
              <span className="block">Technical Support Engineer</span>
              <span className="block text-tech-blue">@ Tech Mahindra</span>
            </motion.div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            B.Tech Computer Science Engineering graduate passionate about technology, 
            data analysis, and creating innovative solutions. Currently empowering 
            businesses through technical support and SaaS development.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-teal text-white px-8 py-3 rounded-full font-semibold animate-glow"
                >
                  View Projects
                </Button>
              </motion.div>
            </Link>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 py-3 rounded-full font-semibold"
                onClick={() => {
                  // Add download resume functionality
                  const link = document.createElement('a');
                  link.href = '/resume.pdf'; // Add actual resume file
                  link.download = 'Vaishnavi_Kapse_Resume.pdf';
                  link.click();
                }}
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-tech-blue rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-tech-blue rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
